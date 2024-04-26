import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Buypage = () => {
  const [user, setUser] = useState({ name: '', email: '' });
  const [pastries, setPastries] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddPastry = (name, price) => {
    const newPastry = { id: Date.now(), name, price };
    setPastries([...pastries, newPastry]);
    setTotalPrice(totalPrice + price);
  };

  const handleRemovePastry = (id, price) => {
    const updatedPastries = pastries.filter((pastry) => pastry.id !== id);
    setPastries(updatedPastries);
    setTotalPrice(totalPrice - price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Buy Pastries</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4 flex flex-wrap">
          <h2 className="font-medium mb-2 w-full">Pastries:</h2>
          <button
            onClick={() => handleAddPastry('Shadow Cake', 20)}
            className="mr-2 mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Strawberry Cake (GHC20)
          </button>
          {/* <button
            onClick={() => handleAddPastry('Donut', 15)}
            className="mr-2 mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Donut (GHC15)
          </button>
          <button
            onClick={() => handleAddPastry('Muffin', 30)}
            className="mr-2 mb-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Muffin (GHC30)
          </button> */}
        </div>
        <div className="mb-4">
          <h2 className="font-medium">Total Price: GHC{totalPrice}</h2>
        </div>
        <div className="mb-4">
          <h2 className="font-medium">Selected Pastries:</h2>
          <ul>
            {pastries.map((pastry) => (
              <li key={pastry.id}>
                {pastry.name} (${pastry.price})
                <button
                  onClick={() => handleRemovePastry(pastry.id, pastry.price)}
                  className="ml-2 px-4 py-1 bg-orange-400 text-white rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="submit"
          className="px-4 py-1 bg-orange-400 text-white rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
        >
          Submit
        </button>
        <Link to="/" className="block mt-4">Back To Home</Link>
      </form>
    </div>
  );
};

export default Buypage;

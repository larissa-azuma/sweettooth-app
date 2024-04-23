
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [pastries, setPastries] = useState([]);
  const [newPastryName, setNewPastryName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [reviewFormData, setReviewFormData] = useState({ pastryId: null, username: '', rating: 0, comment: '' });

  useEffect(() => {
    fetchPastries();
  }, []);

  const fetchPastries = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      if (!response.ok) {
        throw new Error('Failed to fetch pastries');
      }
      const data = await response.json();
      setPastries(data.slice(0, 6)); // Limiting to 6 pastries for demonstration
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (id) => {
    setPastries(pastries.filter(pastry => pastry.id !== id));
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleAddPastry = () => {
    if (!newPastryName || !imageFile) return;
    const newPastry = {
      id: pastries.length + 1,
      title: newPastryName,
      url: URL.createObjectURL(imageFile),
      reviews: []
    };
    setPastries([...pastries, newPastry]);
    setNewPastryName('');
    setImageFile(null);
  };

  const handleToggleReviewForm = (pastryId) => {
    setReviewFormData({ ...reviewFormData, pastryId });
  };

  const handleReviewFormChange = (e) => {
    const { name, value } = e.target;
    setReviewFormData({ ...reviewFormData, [name]: value });
  };

  const handleAddReview = () => {
    const { pastryId, username, rating, comment } = reviewFormData;
    const updatedPastries = pastries.map(pastry => {
      if (pastry.id === pastryId) {
        const newReview = { id: pastry.reviews.length + 1, username, rating, comment };
        return { ...pastry, reviews: [...pastry.reviews, newReview] };
      }
      return pastry;
    });
    setPastries(updatedPastries);
    setReviewFormData({ pastryId: null, username: '', rating: 0, comment: '' });
  };


return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Pastry Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pastries.map(pastry => (
          <div key={pastry.id} className="border rounded-lg overflow-hidden">
            <img src={pastry.url} alt={pastry.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">{pastry.title}</p>
              <button onClick={() => handleDelete(pastry.id)} className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600">Delete</button>
              <button onClick={() => handleToggleReviewForm(pastry.id)} className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 ml-2">Add Review</button>
              {reviewFormData.pastryId === pastry.id && (
                <div className="mt-4">
                  <input
                    type="text"
                    name="username"
                    value={reviewFormData.username}
                    onChange={handleReviewFormChange}
                    placeholder="Your Name"
                    className="py-2 px-3 border rounded-md mb-2"
                  />
                  <input
                    type="number"
                    name="rating"
                    value={reviewFormData.rating}
                    onChange={handleReviewFormChange}
                    placeholder="Rating (1-5)"
                    className="py-2 px-3 border rounded-md mb-2"
                  />
                  <textarea
                    name="comment"
                    value={reviewFormData.comment}
                    onChange={handleReviewFormChange}
                    placeholder="Your Review"
                    rows="3"
                    className="py-2 px-3 border rounded-md mb-2"
                  />
                  <button onClick={handleAddReview} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit Review</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <label htmlFor="fileInput" className="block text-lg font-semibold mb-2">Upload Image:</label>
        <input type="file" id="fileInput" className="py-2 px-3 border rounded-md" onChange={handleUpload} />
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter pastry name"
          value={newPastryName}
          onChange={(e) => setNewPastryName(e.target.value)}
          className="py-2 px-3 border rounded-md mr-2"
        />
        <button onClick={handleAddPastry} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add Pastry</button>
      </div>
    </div>
  );
};

export default Dashboard;
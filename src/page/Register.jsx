import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
    firstName: "",
    lastName: "",
  });
  const { email, password, username, firstName, lastName } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          username,
          password,
          name: {
            firstname: firstName,
            lastname: lastName
          }
        })
      });
      const data = await response.json();
      if (response.ok) {
        handleSuccess("User created successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(data.message || "Failed to create user");
      }
    } catch (error) {
      console.log(error);
      handleError("An error occurred while creating user");
    }
  };




  return (
    <div className=" bg-black dark:bg-gray-900 flex
justify-center px-6 py-12">
      <div className="justify-center w-full xl:w-3/4 lg:w-11/12 flex">
        <div className="w-full h-auto bg-gray-400 dark:bg-gray-800
hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
          style={{ backgroundImage:
"url('https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.vDQ2UpYp8kc9yVyEJhU2sQHaLH%26pid%3DApi&sp=1713980465Tb511c6380b40d5a971edf54609c077d3219810f8f5be3c50486288464540692a')"
}}></div>
        <div className="w-full lg:w-4/12 bg-white dark:bg-gray-700 p-5
rounded-lg lg:rounded-l-none">
          <h3 className="py-4 text-2xl text-center text-gray-800
dark:text-white font-bold">Create an Account</h3>
          <form className="px-8 pt-6 pb-8 mb-4 bg-white
dark:bg-gray-800 rounded" onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold
text-gray-700 dark:text-white" htmlFor="UserName">
                  UserName
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm
leading-tight text-gray-700 dark:text-white border rounded shadow
appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={handleOnChange}
                />
              </div>

            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold
text-gray-700 dark:text-white" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight
text-gray-700 dark:text-white border rounded shadow appearance-none
focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleOnChange}
              />
            </div>
            <div className=" item=align mb-4 md:flex md:justify-between">
              <div className="mb-4 md:mr-2 md:mb-0">
                <label className="block mb-2 text-sm font-bold
text-gray-700 dark:text-white" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm
leading-tight text-gray-700 dark:text-white border border-brightColor
rounded shadow appearance-none focus:outline-none
focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="******************"
                  value={password}
                  onChange={handleOnChange}
                />
                <p className="text-xs italic text-orange-00"></p>
              </div>
              <div className="md:ml-2">
                <label className="block mb-2 text-sm font-bold
text-gray-700 dark:text-white" htmlFor="c_password">
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm
leading-tight text-gray-700 dark:text-white border rounded shadow
appearance-none focus:outline-none focus:shadow-outline"
                  id="c_password"
                  type="password"
                  name="c_password"
                  placeholder="******************"
                  onChange={handleOnChange}
                />
              </div>
            </div>
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-2 font-bold text-white
bg-brightColor rounded-full hover:bg-brightColor dark:bg-brightColor
dark:text-white dark:hover:bg-black focus:outline-none
focus:shadow-outline"
                type="submit"
              >
                Register Account
              </button>
            </div>
            <hr className="mb-6 border-t" />
            <div className="text-center">
              <a className="inline-block text-sm text-black
dark:text-blue-500 align-baseline "
                href="./login">
                Already have an account? Login
              </a>

              <a href="/" className="flex font-semibold text-black
text-sm mt-10">
            <svg className="fill-current mr-2 text-black w-4"
viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373
12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029
239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119
40.971 4.411 40.971-16.971V296z" />
            </svg>
            Go back to Homepage
          </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
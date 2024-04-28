
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
"url('https://images.unsplash.com/photo-1568051243851-f9b136146e97?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
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
                  Username
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
              <div className="mb-4">
              <label className="block mb-2 text-sm font-bold
text-gray-700 dark:text-white" htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight
text-gray-700 dark:text-white border rounded shadow appearance-none
focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                value={password}
                onChange={handleOnChange}
              />
            </div>
              <div className="mb-4">
              <label className="block mb-2 text-sm font-bold
text-gray-700 dark:text-white" htmlFor="confirm">
                Confirm Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight
text-gray-700 dark:text-white border rounded shadow appearance-none
focus:outline-none focus:shadow-outline"
                id="confirm"
                type="confirm"
                name="confirm"
                placeholder="******************"
                value={confirm}
                onChange={handleOnChange}
              />
            </div>
            
            <div className="mb-6 text-center">
              <button
                className="w-full px-4 py-1 font-bold text-white
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
            Back To Home
          </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
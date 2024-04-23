// import { useState } from "react";
// // import { useLogin } from "./useLogin";
// import { Link } from "react-router-dom";

// const Adlogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   // const { login, error } = useLogin();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await login(email, password);
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center">
//       <div className="w-full max-w-md p-8 space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
//             Welcome to Materio!
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600">
//             Please sign-in to your account and start the adventure
//           </p>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="w-full px-4 py-2 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring-1"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="w-full px-4 py-2 border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring-1"
//           />
//           <div className="flex items-center justify-between">
//             <div className="flex items-center">
//               <input
//                 id="remember-me"
//                 name="remember-me"
//                 type="checkbox"
//                 className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//               />
//               <label
//                 htmlFor="remember-me"
//                 className="ml-2 block text-sm text-gray-900"
//               >
//                 Remember me
//               </label>
//             </div>
//             <div className="text-sm">
//               <Link
//                 to="/forgot-password"
//                 className="font-medium text-blue-600 hover:text-blue-500"
//               >
//                 Forgot password?
//               </Link>
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-6 text-center text-sm text-gray-500">
//           New on our platform?{" "}
//           <Link to="/register" className="text-blue-600 hover:text-blue-500">
//             Create an account
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Adlogin;
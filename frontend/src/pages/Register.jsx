import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../api/Userapp';

const Register = () => {
  let [username, setUserName] = useState("");
  let [firstname, setFirstName] = useState("");
  let [lastname, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("")
  

  const navigate = useNavigate()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  

  const handleRegister = async (event) => {
    event.preventDefault();
    let user = {
      username,
      firstname,
      lastname,
      email,
      password

    };
    try {
      const data = await register(user);
      if(!data.success) {
        setError(data.message || "Registration Failed. Please try again");
        setSuccess(false)
      }else{
        setSuccess(true)
        setError("")
        navigate("/verify-email")
      }
      
    } catch (error) {
      console.log(error)
      setError(error.message)
      
    }
  };
  const showError = () => {
    if(error) {
      return(
        <div className='text-red-600 text-xl font-bold text-center'>{error}</div>
      )
    }
  }

 

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-blue-200 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register</h2>
        <form onSubmit={handleRegister}>
      
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(event) => setFirstName(event.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

 
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

        
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter a username"
              value={username}
              onChange={(event) => setUserName(event.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

       
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

        
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

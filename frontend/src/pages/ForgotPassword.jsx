import { useState } from 'react';
import { forgotpassword } from '../api/Userapp';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotpassword({ email }).then((data) => {
        if (data.error) {
          setError(data.error);
          setSuccess(false);
        } else {
          setSuccess(false)
          setError("")
          navigate("/")
        }
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };
  const showError = () => {
    if (error) {
      return (
        <div className="text-red-600 text-xl font-bold text-center">
          {error}
        </div>
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-blue-200 p-8 rounded-lg shadow-lg w-full max-w-md">
      {showError()}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
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
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-200"
              required
            />
          </div>
        
         
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

import React, { useState } from 'react';

const AddCategory = () => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [lastBooked, setLastBooked] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!customerName || !email || !location || !lastBooked) {
      setError('All fields are required.');
      setSuccess(false);
      return;
    }

    // Clear any previous error
    setError('');

    // Simulate a successful submission (replace with an actual API call)
    try {
      // Imagine an API call here like:
      // await api.addCustomer({ customerName, email, location, lastBooked });

      setSuccess(true);

      // Clear form fields
      setCustomerName('');
      setEmail('');
      setLocation('');
      setLastBooked('');
    } catch (err) {
      setError('Failed to add customer. Please try again.');
      setSuccess(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-orange-600">Add Customer</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            Customer has been added successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="customerName" className="block font-bold mb-2">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastBooked" className="block font-bold mb-2">
              Last Booked
            </label>
            <input
              type="date"
              id="lastBooked"
              name="lastBooked"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={lastBooked}
              onChange={(e) => setLastBooked(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <i className="fas fa-user-plus mr-2"></i> Add Customer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;

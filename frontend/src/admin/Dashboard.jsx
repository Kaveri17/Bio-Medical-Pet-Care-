import React, { useState } from 'react';
import { FaUsers, FaDog, FaPaw, FaSyringe } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const navigate = useNavigate();

  const allVaccines = [
    { name: "Rabies", animal: "Dog" },
    { name: "Foot & Mouth Disease", animal: "Cow" },
    { name: "Newcastle Disease", animal: "Hen" },
    { name: "Leptospirosis", animal: "Dog" },
    { name: "Tuberculosis", animal: "Cow" },
    { name: "Avian Influenza", animal: "Hen" },
    { name: "Distemper", animal: "Dog" },
    { name: "Bovine Respiratory Disease", animal: "Cow" },
    { name: "Marek's Disease", animal: "Hen" },
    { name: "Parvovirus", animal: "Dog" },
    { name: "Foot Rot", animal: "Cow" },
    { name: "Fowlpox", animal: "Hen" },
    { name: "Canine Hepatitis", animal: "Dog" },
    { name: "Anthrax", animal: "Cow" },
    { name: "Coccidiosis", animal: "Hen" },
  ];

  const [showAllVaccines, setShowAllVaccines] = useState(false);

  const displayedVaccines = showAllVaccines ? allVaccines : allVaccines.slice(0, 10);

  const handleShowMore = () => {
    navigate('/vaccines', {
      state: { vaccines: allVaccines.slice(10) },
    });
  };

  return (
    <>

   
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100   ">
    <h1 className='text-3xl text-blue-700 pt-8 pb-4 ps-72  font-bold  '>Welcome back, kaveri🙏</h1>

        <div className='flex flex-col justify-center items-center p-4'>
   
      <div className="cards flex flex-col md:flex-row w-[62%] justify-between mb-8">
        <DashboardCard icon={<FaUsers />} title="Total Users" value={50}  />
        <DashboardCard icon={<FaDog />} title="Total Animals" value={3} />
        <DashboardCard icon={<FaPaw />} title="Animals Registered" value={80} />
      </div>

    
      <div className="vaccines-list w-full md:w-3/4 lg:w-2/3 py-10">
        <h1 className="text-3xl font-bold pb-6 text-center text-blue-700">Vaccines List</h1>

       
        <div className="vaccines-list-container w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-xl border border-blue-300">
          <table className="table-auto w-full text-sm">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-4 px-6 text-left text-blue-800">Vaccine Name</th>
                <th className="py-4 px-6 text-left text-blue-800">Animal Type</th>
              </tr>
            </thead>
            <tbody>
              {displayedVaccines.map((vaccine, index) => (
                <tr key={index} className="border-b hover:bg-blue-50 transition duration-300">
                  <td className="py-3 px-6 flex items-center space-x-3">
                    <div className="flex items-center justify-start space-x-2">
                      {/* Custom Icon Styling */}
                      <div className="bg-orange-100 p-2 rounded-full">
                        <FaSyringe className="text-orange-600 text-xl" />
                      </div>
                      <span className="font-semibold text-gray-800">{vaccine.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-gray-700">{vaccine.animal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Show More / Show Less Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:bg-gradient-to-l transition duration-300 shadow-md transform hover:scale-105"
          >
            Show More
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Dashboard;
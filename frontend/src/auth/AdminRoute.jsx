// import React from 'react';
// import { Navigate, Outlet } from 'react-router-dom';
// import { useUserStore } from '../store/userStore'; // Update the path as per your project structure

// const AdminRoute = () => {
//   const { isAuthenticated, } = useUserStore();

//   if (!isAuthenticated || !user || user.role !== 1) {
//     return <Navigate to="/login" />;
//   }

//   return <Outlet />;
// };

// export default AdminRoute;


// import React from 'react'

// import { Navigate, Outlet } from 'react-router-dom'
// import { useUserStore } from '../store/userStore';

// const AdminRoute = () => {
//   const { isAuthenticated } = useUserStore();
//   return (
//     isAuthenticated() && isAuthenticated().user.role === '1' ? <Outlet/> : <Navigate to ='/login' />
//   )
// }

// export default AdminRoute

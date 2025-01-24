import React from 'react'

import Dashboard from './Dashboard'
import AdminSidebar from '../layout/AdminSidebar'





const AdminDashboard= () => {
  return (
   <>
   <div className='flex '>
    <AdminSidebar/>

    <div className='w-full'>
<Dashboard/>
   </div>
   </div>
   </>
  )
}

export default AdminDashboard
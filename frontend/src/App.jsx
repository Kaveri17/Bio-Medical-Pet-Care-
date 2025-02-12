import React from "react";

import MyRoutes from "./MyRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer/>
      <MyRoutes />
      
    </>
  );
}

export default App;

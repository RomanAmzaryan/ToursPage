import React, { useState } from 'react';
import AllContinentsNavbar from '../AllContinentsPage/allContinentsNavbar/AllContinentsNavbar';
import { Outlet } from 'react-router-dom';

const DestinationLayout = () => {
  return (
    <div>
      <AllContinentsNavbar/>
      <Outlet/>
    </div>
  );
};

export default DestinationLayout;

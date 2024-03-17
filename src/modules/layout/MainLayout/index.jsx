import React from 'react';
import { useLocation } from 'react-router-dom';


const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="mx-auto">
     
      <>{children}</>
    </div>
  );
};

export default MainLayout;

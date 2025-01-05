import React from "react";

const Drawer = ({ children, drawerWidth = "w-[90%]" }) => {
  return (
    <div className="fixed z-50 right-0 inset-0 bg-gray-800 bg-opacity-75 flex justify-end items-center">
      <div
        className={`bg-white p-4 shadow-lg  h-screen overflow-scroll ${drawerWidth}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Drawer;

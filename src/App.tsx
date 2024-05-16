import React, { useState } from "react";
import { Dashboard } from "./components/Dashboard/Dashboard.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Settings } from "./components/Settings.tsx";
import { Lead } from "./components/Lead.tsx";
import { Activities } from "./components/Activities.tsx";
import { Deals } from "./components/Deals.tsx";
import { FaArrowRight } from "react-icons/fa";
import { Sidebar } from "./components/Dashboard/Sidebar.tsx";

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(true);
  const toggleSidebar = () => {
    setOpenSidebar((prevSidebar) => !prevSidebar);
  };

  return (
    <>
      <BrowserRouter>
        <div className="h-full w-full flex">
          {openSidebar ? (
            <Sidebar toggleSidebar={toggleSidebar} />
          ) : (
            <>
              <button
                className="p-1 ml-1 mt-2 h-[30px] w-[30px] flex items-center justify-center fixed"
                onClick={toggleSidebar}
              >
                <FaArrowRight />
              </button>
            </>
          )}
          <Routes>
            <Route path="/" element={<Dashboard openSidebar={openSidebar} />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/lead" element={<Lead />} />
            <Route path="/deals" element={<Deals />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

import React, { useState } from "react";
import HaedMain01 from "../Components/HeadMain/HaedMain01";
import BarChart from "../Components/Chart/BarChart";
import ExperienceCards from "../Components/ExperienceCards/ExperienceCards";

const DashboardScreen = () => {

  return (
    <div 
    style={{
      
      boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
    }}
    className="h-100 w-100 overflow-auto d-flex flex-column bg-white justify-content-start align-items-start  rounded-5 bg-danger">
      <HaedMain01 />

      
      <ExperienceCards />

      <div 
      className="w-100 h-auto d-flex p-md-0 pt-3 flex-wrap ">
        <div className=" col-12 col-lg-6 col-md-6 p-md-2 ps-md-3 p-1 pt-0">
          <div
            style={{
              height: 300,
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
              boxShadow:
                "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
              backgroundColor: "#ffffff",
            }}
            className=" rounded-4 p-4 pb-3 "
          ></div>
        </div>
        
        <BarChart />
        <BarChart />
        <BarChart />
        <BarChart />
      </div>
    </div>
  );
};

export default DashboardScreen;

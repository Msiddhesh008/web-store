import React from "react";
import HaedMain01 from "../Components/HeadMain/HaedMain01";
import TimeCalculator from "../Components/Functions/TimeCalculator";
import reactLogo from "../Images/reactLogo.png";

const DashboardScreen = () => {
  return (
    <div
      style={
        {
          // background: "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)"
        }
      }
      className="h-100 w-100 d-flex flex-column justify-content-start align-items-start"
    >
      <div className="p-3 d-flex align-items-center justify-content-between  w-100">
        <HaedMain01 />
      </div>

      <div
        style={{
          height: "40%",
        }}
        className="w-100 d-flex flex-wrap"
      >
        <div className="col-12 col-md-6">
          
        </div>

        <div className="col-12 col-md-6 p-3 h-100">
          <div
            style={{
              backgroundColor: "#7A45FB",
              background:
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
              // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
            className="w-100 h-100  rounded-5 d-flex"
          >
            <div className="d-flex col-7 align-items-start justify-content-end p-3 ps-4 flex-column h-100">
              <h6 className="text-white fw-bold">React JS Experience</h6>
              <h2 className="fw-bold text-white text-center">
                <TimeCalculator JoiningDate={"2020-02-02"} />
              </h2>
            </div>

            <div className="col-5 p-3">
              <img
                style={{
                  boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                }}
                alt="profile_image"
                className="rounded-5 "
                width={"100%"}
                height={"100%"}
                src={reactLogo}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;

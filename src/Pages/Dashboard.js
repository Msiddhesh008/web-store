import React, { useState } from "react";
import logo from "../Images/miniLogo.jpg";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Slice/auth";
import Button02 from "../Components/Buttons/Button02";
import { NavLink, Route, Routes } from "react-router-dom";
import { RouteLink } from "../Routes/Routes";
import NotFound from "./NotFound";
import { nav } from "../Routes/Nav";

const Dashboard = () => {
  const distach = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [openDrawerClick, setOpenDrawerClick] = useState(false);

  const openDrawerOnClick = () => {
    setOpenDrawerClick(!openDrawerClick);
  };

  const logOutHandler = () => {
    distach(loginUser(false));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        backgroundColor: "#0C0C10",
        overflow: "hidden", // Hide overflow to prevent horizontal scrollbar during transition
      }}
      className="d-flex p-2 ps-0"
    >
      <aside
        className="h-100 pointer position-relative"
        onMouseOver={() => setIsDrawerOpen(true)}
        onMouseLeave={() => setIsDrawerOpen(true)}
        style={{
          width: isDrawerOpen || openDrawerClick ? 140 : 80,
          transition: "width 0.3s ease-in-out", // Smooth transition for width change
          overflow: "hidden", // Hide overflow to prevent content overflow during transition
        }}
      >
        <div className="d-flex justify-content-start p-3">
          <img
            onClick={openDrawerOnClick}
            style={{
              width: 40,
            }}
            src={logo}
            alt="Logo"
            className="rounded-3"
          />
        </div>
        <div className="p-2">
          {nav.map(({ title, path }) => (
            <div className=" mb-2 w-100 d-flex ">
              <NavLink 

              className="link p-2  rounded-4   w-100 ps-3 " to={path}>
                {title}
              </NavLink>
            </div>
          ))}
        </div>
        <section
          className="d-flex justify-content-center mb-3"
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "100%",
          }}
        >
          <Button02
            title={"Log Out"}
            onClick={logOutHandler}
            height={40}
            width={isDrawerOpen || openDrawerClick ? "60%" : "80%"}
            type={"button"}
            gradientColors={["#7965EE", "#7965EE"]}
            hover="#5f48ea"
            open={isDrawerOpen || openDrawerClick}
          />
        </section>
      </aside>

      <main
        className=" h-100 rounded-5"
        style={{
          backgroundColor: "#FAFBFC",
          width: `calc(100% - ${isDrawerOpen || openDrawerClick ? 140 : 80}px)`,
          transition: "width 0.3s ease-in-out",
          overflow: "auto",
        }}
      >
        <AppContent />
      </main>
    </div>
  );
};

export default Dashboard;

const AppContent = () => {
  return (
    <Routes>
      {RouteLink.map(({ path, component }, index) => (
        <Route key={index} path={path} element={component} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

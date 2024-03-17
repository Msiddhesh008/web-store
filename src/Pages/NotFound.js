import React from "react";
import bgimg from "../Images/light-bg.png";

const NotFound = () => {
  return (
    <div
      style={{
        height: "100%",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover", // Cover the entire container
        backgroundPosition: "center", // Center the image horizontally and vertically
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        paddingRight: 100,
        position:"relative"
      }}
    >
      <div
        style={{
          width: "auto",
          background: "rgba(255, 255, 255, 5)" /* Transparent background */,
          backdropFilter: "blur(10px)" /* Blur effect */,
          borderRadius: "30px" /* Rounded corners */,
          padding: "2rem",
          border: "0px solid #bfe9ff" /* Transparent border initially */,
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 24px 64px #26214a1a" /* Shadow effect */,
        }}
      >
        <span
          style={{
            color: "#5f48ea",
            fontSize: "60px",
            fontWeight: "800",
          }}
        >
          Page not found
        </span>
      </div>
    </div>
  );
};

export default NotFound;

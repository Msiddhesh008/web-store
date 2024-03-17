import { useNavigate } from "react-router-dom";
import Input01 from "../Components/Inputs/Input01";
import bgimg from "../Images/dark-bg.png";
import logo from "../Images/logo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Slice/auth";
import { useEffect } from "react";
import Button01 from "../Components/Buttons/Button01";

const Login = () => {
  const { isAuthenticate } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticate) {
      navigate("/dashboard");
    }
  }, [navigate, isAuthenticate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let formObj = Object.fromEntries(formData.entries());

    if (formObj.name === "Admin" && formObj.password === "Admin") {
      dispatch(loginUser(true));
      return navigate("/");
    } else {
      dispatch(loginUser(false));
      alert("Invalid credentials");
      return navigate("/login");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover", // Cover the entire container
        backgroundPosition: "center", // Center the image horizontally and vertically
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        paddingRight: "200px",
      }}
    >
      <img
        style={{
          position: "absolute",
          left: 18,
          top: 18,
          width: 120,
        }}
        src={logo}
        alt="img"
        className="rounded-3"
      />
      <form
        onSubmit={handleSubmit}
        style={{
          width: "40%",
          height: "50%",
          background: "rgba(255, 255, 255, 0.5)" /* Transparent background */,
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
        <div className="input-group">
          <span className="text-white ps-1">Owner name</span>
          <Input01 placeholder={"Owner name"} type={"text"} name={"name"} />
        </div>

        <div className="input-group">
          <span className="text-white ps-1">Password</span>
          <Input01
            placeholder={"Password"}
            type={"password"}
            name={"password"}
          />
        </div>
        <Button01
          title={"Log In"}
          type={"submit"}
          backgroundColor={"#7965EE"}
          hover="#5f48ea"
        />
      </form>
      <span
        style={{
          position: "absolute",
          right: 4,
          bottom: 0,
          fontSize: "14px",
          color: "#D9D9D9",
        }}
      >
        Crafted by Siddhesh More
      </span>
    </div>
  );
};
export default Login;

import { useNavigate } from "react-router-dom";
import Input01 from "../Components/Inputs/Input01";
import logo from "../Images/logoLight.png";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Slice/auth";
import { useEffect } from "react";
import Button01 from "../Components/Buttons/Button01";
import { validationSchema } from "../Validations/LoginValidation";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { TiWarning } from "react-icons/ti";



const Login = () => {
  const { isAuthenticate } = useSelector((state) => state?.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticate) {
      navigate("/dashboard");
    }
  }, [navigate, isAuthenticate]);

  const onSubmit = async (value) => {
    console.log(value);

    if (value.name === "Admin" && value.password === "Admin") {
      dispatch(loginUser(true));
      return navigate("/");
    } else {
      dispatch(loginUser(false));
      alert("Invalid credentials");
      reset()
      return navigate("/login");
    }
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div
      style={{
        height: "100vh",
        // backgroundImage: `url(${bgimg})`,
        backgroundColor:"#FAFBFC",
        backgroundSize: "cover", // Cover the entire container
        backgroundPosition: "center", // Center the image horizontally and vertically
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // paddingRight: "200px",
        position:"relative",
        overflow:"hidden"
      }}
    >
      <img
        style={{
          position: "absolute",
          left: 30,
          top: 28,
          width: 100,
        }}
        src={logo}
        alt="img"
        className="rounded-3"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          width: "30%",
          height: "auto",
          background: "#fff" /* Transparent background */,
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
          zIndex:2
        }}
      >
        <h3 className="fw-bolder text-dark">Wellcome !</h3>
        <div className="input-group">
          <span className="text-dark ps-1 web-text-small">Owner name</span>
          <Input01 
            register={register("name")} placeholder={"Owner name"} type={"text"} name={"name"} />
          {errors.name && <span className="text-danger web-text-small fw-bold ps-2 d-flex align-items-center gap-1 mt-1"><TiWarning className="fw-bold fs-5 "/> {errors.name.message}</span>}
        </div>

        <div className="input-group">
          <span className="text-dark ps-1 web-text-small">Password</span>
          <Input01
            placeholder={"Password"}
            type={"password"}
            name={"password"}
            register={register("password")}
          />
          {errors.password && <span className="text-danger web-text-small fw-bold ps-2 d-flex align-items-center gap-1 mt-1"><TiWarning className="fw-bold fs-5 "/> {errors.password.message}</span>}
        </div>
        <Button01
          title={"Log In"}
          type={"submit"}
          backgroundColor={"#7965EE"}
          hover="#5f48ea"
        />
      </form>
      <div
        style={{
          position: "absolute",
          right: 4,
          bottom: 0,
          fontSize: "14px",
          color: "#D9D9D9",
          zIndex:3,
          textAlign:"center",
          width:"100%"
        }}
      >
        Crafted by Siddhesh More
      </div>


      <span style={{
        width:"1531px",
        height:"500px",
        position:"absolute",
        bottom:-204,
        background:"linear-gradient(90deg, #7A45FB 0%, #DE41B5 100%)",
        borderRadius:"41px 269px 30px 40px",
        transform: "rotate(-17deg)",
      
      }}></span>
    </div>
  );
};
export default Login;
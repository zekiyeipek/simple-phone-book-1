import React, { useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/animation_loiozho6.json";
import user_icon from "../assets/iHf2kAt5O1.gif";
import pass_icon from "../assets/Animation - 1699026937548.gif";
import { useNavigate } from "react-router-dom";
import "../styles.css";

function LoginScreen() {
  document.title = "Login Page";
  const phoneRef = useRef < LottieRefCurrentProps > null;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  document.body.style.backgroundColor = "#eae5e3";

  const handleLogin = () => {
    const dummyUsername = "ipek";
    const dummyPassword = "1111";
    if (username === dummyUsername && password === dummyPassword) {
      setLoggedIn(true);
      navigate("/MainScreen");
    }
  };

  return (
    <div
      className="LoginScreen"
      style={{ display: "flex", marginTop: "150px", marginLeft: "150px" }}
    >
      <div className="lottie-container">
        <Lottie
          onComplete={() => {
            phoneRef;
          }}
          lottieRef={phoneRef}
          animationData={animationData}
          style={{
            width: "750px",
            height: "750px",
          }}
        />
      </div>
      <div className="form-container" style={{ flex: 1, marginTop: "150px" }}>
        <h1 style={{ fontSize: "50px" }}>Phone Book</h1>
        <div className="form-group">
          <img
            src={user_icon}
            alt=""
            style={{
              width: "40px",
              height: "40px",
              marginRight: "10px",
              marginTop: "50px",
            }}
          />
          <input
            type="text"
            placeholder=" Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              fontSize: "18px",
              marginBottom: "10px",
            }}
          />
        </div>
        <div className="form-group">
          <img
            src={pass_icon}
            alt=""
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          <input
            type="password"
            placeholder=" Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ fontSize: "18px", marginBottom: "10px" }}
          />
        </div>
        <div className="submit-container">
          <button
            type="button"
            onClick={handleLogin}
            style={{
              width: "230px",
              height: "20px",
              marginTop: "10px",
              marginLeft: "50px",
              color: "#6f6c6b",
            }}
          >
            Submit{" "}
          </button>
          {loggedIn && <p>Logged in successfully!</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

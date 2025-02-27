import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/login/login";
import WindowCloseIcon from "../../components/WindoCloseIcon/WindowCloseIcon";
import WindowError from "../../components/WindowError/WindowError";
import { UserDispatchContext } from "../../context/UserInfoProvider";

export default function LoginPage() {
  const [isTypingPassword, setIsTypingPassword] = useState(false);
  const [emailRecorder, setEmailRecorder] = useState("");
  const [passwordRecorder, setPasswordRecorder] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const setUserInfo = useContext(UserDispatchContext);

  const navigate = useNavigate();
  const myRef = useRef(null);
  const handleClickOutside = (e) => {
    const target = e.target;
    if (myRef.current !== null && !myRef.current.contains(target)) {
      setIsTypingPassword(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  });

  const userInfo = localStorage.getItem("user");

  useEffect(() => {
    if (userInfo) {
      navigate("/chat");
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailRecorder === "" || passwordRecorder === "") {
      setErrorMessage("Please fill in your email and password");
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
      return;
    }
    const result = await login({
      email: emailRecorder,
      password: passwordRecorder,
    });
    if (result.error) {
      if (result.status === 422) {
        setErrorMessage("Something goes wrong");
      } else {
        setErrorMessage(result.error.explanation);
      }
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000);
    }
    if (!result.error) {
      localStorage.setItem("access_token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data));
      localStorage.setItem("username", result.data.username);
      setUserInfo(JSON.parse(localStorage.getItem("user")));
      navigate("/chat");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form
        className={styles.loginForm}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <WindowCloseIcon />
        {errorMessage && <WindowError errorMessage={errorMessage} />}
        <div className={styles.loginHeading}>
          <h2>Welcome Back</h2>
          <p className={styles.loginDesc}>Nice to see you again!</p>
        </div>
        <div className={styles.loginInputContainer}>
          <label className={styles.loginLabel}>Email address</label>
          <input
            className={styles.loginInput}
            type="email"
            onChange={(e) => {
              setEmailRecorder(e.target.value);
            }}
          />
          <label className={styles.loginLabel}>Password</label>
          <input
            className={styles.loginInput}
            ref={myRef}
            type="password"
            onClick={() => {
              setIsTypingPassword(true);
            }}
            onChange={(e) => {
              setIsTypingPassword(true);
              setPasswordRecorder(e.target.value);
            }}
          />
          <p className={styles.loginToForgetPassword}>
            <Link className={styles.loginToForgetPasswordLink} to="">
              Forget your password?
            </Link>
          </p>
        </div>
        <button className={styles.loginBtn} type="submit">
          Login
        </button>
        <p className={styles.loginRegisterNotification}>
          Need an account?{" "}
          <Link className={styles.loginToRegisterLink} to="/register">
            Register here
          </Link>
        </p>
        {isTypingPassword ? (
          <>
            <img
              className={styles.loginBottomLeftImg}
              src={require("../../assets/LoginPage/left-close.png")}
              alt="hime-left-close"
            />
            <img
              className={styles.loginBottomRightImg}
              src={require("../../assets/LoginPage/right-close.png")}
              alt="hime-right-close"
            />
          </>
        ) : (
          <>
            <img
              className={styles.loginBottomLeftImg}
              src={require("../../assets/LoginPage/left-open.png")}
              alt="hime-left-open"
            />
            <img
              className={styles.loginBottomRightImg}
              src={require("../../assets/LoginPage/right-open.png")}
              alt="hime-right-open"
            />
          </>
        )}
      </form>
    </div>
  );
}

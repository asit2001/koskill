import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./styles/LoginPage.module.css";
import { FormEvent, useEffect, useState } from "react";

import { registerUser, addCookie, loginUser } from "../utils";
import { Toaster, toast } from "react-hot-toast";
function LoginPage() {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [name, email, password]);
  

  function signUp(e: FormEvent) {
    e.preventDefault();
    registerUser({email,name,password}).then(()=>{
        navigate("/login");
    }).catch(e=>{
        setError(true);
        toast.error(e.message, {
            position: "bottom-center",
            duration: 3000,
          })
    })
  }
  function signIn(e: FormEvent) {
    e.preventDefault();
    loginUser({email,password}).then(({name})=>{
        addCookie("name",name);
        navigate("/");
    }).catch(e=>{
        toast.error(e.message, {
            position: "bottom-center",
            duration: 3000,
          });
    })

  }

  return (
    <div className={styles.container}>
      <div className={styles.loginModel}>
        <form
          action=""
          className={error? styles.from__error : styles.form}
        >
          {path === "/login" ? (
            <h2 className={styles.title}>Welcome Back</h2>
          ) : (
            <h2 className={styles.title}>Welcome to koSkill</h2>
          )}
          {path === "/login" ? (
            <p className={styles.subTitle}>
              sign in with your email address and password
            </p>
          ) : (
            <p className={styles.subTitle}>
              sign up with email address and password
            </p>
          )}
          {path === "/register" && (
            <>
              <label className={styles.label} htmlFor="name">
                Name
              </label>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </>
          )}

          <label className={styles.label} htmlFor="email">
            email address
          </label>
          <div className={styles.inputContainer}>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label className={styles.label} htmlFor="password">
            password
          </label>
          <div className={styles.inputContainer}>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {path === "/login" && (
            <div className={styles.linkContainer}>
              <p className={styles.forgetPassword}>
              </p>
            </div>
          )}
          {path === "/login" ? (
            <>
              <button onClick={signIn} className={styles.submitBtn}>
                Sign In
              </button>
              <p className={styles.registerBtn}>
                Don't have an account? <Link to={"/register"}>Sign Up</Link>
              </p>
            </>
          ) : (
            <>
              <button onClick={signUp} className={styles.submitBtn}>
                Sign Up
              </button>
              <p className={styles.registerBtn}>
                Already have an account? <Link to={"/login"}>Sign In</Link>
              </p>
            </>
          )}
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default LoginPage;

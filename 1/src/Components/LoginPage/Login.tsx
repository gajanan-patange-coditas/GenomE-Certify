import { useNavigate } from "react-router-dom";
import { PrimaryBtn, SecondaryBtn } from "../Button/Button";
import styles from "./Login.module.scss";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.Loginpage}>
        <div className={styles.logo}>
          <h1 className={styles.h1}>
            Genome
            <span>CertifY</span>
          </h1>
        </div>
        <div className={styles.loginformdiv}>
          <h2>Login</h2>
          <form action="">
            <div className={styles.inputdiv}>
              Name
              <input type="text" placeholder="Your Name Here" required />
            </div>
            <div className={styles.inputdiv}>
              Password:
              <input
                type="password"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <PrimaryBtn> Login</PrimaryBtn>
          </form>
          <SecondaryBtn onClick={() => navigate("/register")}>
            {" "}
            New User? / Register{" "}
          </SecondaryBtn>
        </div>
      </div>
    </>
  );
};

export default Login;

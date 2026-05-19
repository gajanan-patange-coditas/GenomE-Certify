import styles from "./Login.module.scss";

const Login = () => {
  return (
    <>
      {" "}
      <div className={styles.Loginpage}>
        <div className={styles.logo}>
          <h1 className={styles.h1}>
            Genome
            <span>CertifY</span>
          </h1>
        </div>
        <div className={styles.loginformdiv}>

    <form action="" >
        <div className={styles.inputdiv}>Name</div>
    <input type="text" placeholder="Your Name Here" />
    </form>

        </div>
      </div>
    </>
  );
};

export default Login;

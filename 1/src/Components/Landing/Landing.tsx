import { PrimaryBtn, SecondaryBtn } from "../Button/Button";
import styles from "./Landing.module.scss";

export const Landing = () => {
  return (
    <div className={styles.landingPage}>
      <header className={styles.header}>
        <div className={styles.logo}>
          Genom<span>E</span>
        </div>
        <PrimaryBtn> Login</PrimaryBtn>
      </header>

      <main className={styles.main}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Genom<span>E</span> medica<span>L</span>
          </h1>
          <p className={styles.heroText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nihil
            fugit doloribus, nemo eius dolores odio facilis vitae aliquam
            laboriosam commodi perspiciatis.
          </p>
          <SecondaryBtn>Get Started</SecondaryBtn>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
          <div className={styles.dna}></div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>follow us on coditas asdf footer section</p>
      </footer>
    </div>
  );
};

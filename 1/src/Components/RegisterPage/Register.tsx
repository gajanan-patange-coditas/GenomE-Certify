import { useState } from "react";
import styles from "./Register.module.scss";

const Register = () => {
  const [formData, setFormData] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    degree: "",
    dateOfPassing: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log();

  return (
    <div className={styles.Registerpage}>
      <div className={styles.registerformdiv}>
        <form action="" className={styles.form}>
          <h2>register</h2>
          <div className={styles.registertrio}>
            <div className={styles.inputs}>
              <select name="title" value={formData.title} required>
                <option value="select" disabled>
                  select
                </option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
              </select>
            </div>

            <div className={styles.inputs}>
              <input
                type="text"
                onChange={handleChange}
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                required
              />
            </div>

            <div className={styles.inputs}>
              <input
                type="text"
                onChange={handleChange}
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                required
              />
            </div>
          </div>
          <div className={styles.inputs}>
            <input
              type="email"
              onChange={handleChange}
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              required
            />
          </div>
          <div className={styles.inputs}>
            <input
              type="password"
              onChange={handleChange}
              placeholder="Enter password"
              name="password"
              value={formData.password}
              required
            />
          </div>
          <div className={styles.inputs}>
            <input
              type="text"
              onChange={handleChange}
              name="degree"
              value={formData.degree}
              placeholder="degree"
              required
            />
          </div>
          <div className={styles.inputs}>
            <input
              type="file"
              onChange={handleChange}
              name="certificate"
              value={formData.certificate}
              required
            />
          </div>
          <div className={styles.inputs}>
            <input
              type="date"
              onChange={handleChange}
              name="dateOfPassing"
              value={formData.dateOfPassing}
              required
            />
          </div>
          <div className={styles.inputs}>
            <input type="submit" required />
          </div>
        </form>
      </div>

      <div className={styles.heroregister}>
        <div className={styles.logo}>
          <h1 className={styles.h1}>
            Genome
            <span>CertifY</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Register;

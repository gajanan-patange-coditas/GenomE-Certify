import { useState } from "react";
import styles from "./Register.module.scss";
import authService from "../../services/All.auth.services";

const Register = () => {
  const [formData, setFormData] = useState({
    title: "",
    first_name: "",  
    last_name: "",   
    email_id: "",   
    password: "",
    degree: "",
    year_of_passing: "",  
    certificate: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "certificate") {
      setFormData((prev) => ({ ...prev, certificate: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    const data = new FormData();
    data.append("email_id", formData.email_id);
    data.append("password", formData.password);
    data.append("title", formData.title);
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("degree", formData.degree);
    data.append("year_of_passing", formData.year_of_passing);
    
    if (formData.certificate) {
      data.append("certificate", formData.certificate);
    }

    await authService.registerUser(data);
  };

  return (
    <div className={styles.Registerpage}>
      <div className={styles.registerformdiv}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>register</h2>
          <div className={styles.registertrio}>
            <div className={styles.inputs}>
              <select name="title" value={formData.title} onChange={handleChange} required>
                <option value="" disabled>select</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
              </select>
            </div>
            <div className={styles.inputs}>
              <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} required />
            </div>
            <div className={styles.inputs}>
              <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} required />
            </div>
          </div>

          <div className={styles.inputs}>
            <input type="email" name="email_id" placeholder="Email ID" onChange={handleChange} required />
          </div>

          <div className={styles.inputs}>
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          </div>

          <div className={styles.inputs}>
            <input type="text" name="degree" placeholder="Degree" onChange={handleChange} required />
          </div>
         
          <div className={styles.inputs}>
            <label>Certificate:</label>
            <input type="file" name="certificate" onChange={handleChange} required />
          </div>

          <div className={styles.inputs}>
            <input type="text" name="year_of_passing" placeholder="Year of Passing" onChange={handleChange} required />
          </div>

          <div className={styles.inputs}>
            <input type="submit" value="register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

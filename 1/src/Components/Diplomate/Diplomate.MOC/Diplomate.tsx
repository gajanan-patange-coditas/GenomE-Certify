import { PrimaryBtn } from "../../Button/Button";
import styles from "./Diplomate.module.scss";
const DiplomateMoc = () => {
  return (
    <div className={styles.diplomate}>
      <div className={styles.mocdiv}>
        <div className="moc">
          portal payement
          <PrimaryBtn>complete</PrimaryBtn>
        </div>
        <div className="moc">
          exam payement
          <PrimaryBtn>complete</PrimaryBtn>
        </div>
        <div className="moc">
          certfication payment
          <PrimaryBtn>complete</PrimaryBtn>
        </div>
      </div>
      <div className={styles.mocdiv}>
        <div className="moc">
          {" "}
          Upload license & degrees
          <PrimaryBtn>upload</PrimaryBtn>
        </div>
        <div className="moc">
          Upload MOC
          <PrimaryBtn>upload</PrimaryBtn>{" "}
        </div>
        <div className="moc">
          Upload marksheet
          <PrimaryBtn>upload</PrimaryBtn>
        </div>
      </div>
      <div className={styles.mocdiv}>
        <div className="moc">
          course enrollment Proofs
          <PrimaryBtn>upload</PrimaryBtn>
        </div>
        <div className="moc">
          enrollment certification
          <PrimaryBtn>upload</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};


export default DiplomateMoc;
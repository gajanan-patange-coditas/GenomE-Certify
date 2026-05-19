import { Landing } from "./Components/Landing/Landing"
import styles from './App.module.scss'
export const App = () => {

  return(
    <>
    <div className={styles.main}></div>
    <Landing/>
    </>
  )
}
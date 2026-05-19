import { Landing } from "./Components/Landing/Landing"
import styles from './App.module.scss'
import Login from "./Components/LoginPage/Login"
export const App = () => {

  return(
    <>
    <div className={styles.main}></div>
   <Login/>
    </>
  )
}
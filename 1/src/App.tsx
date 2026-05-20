import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";  
import styles from './App.module.scss';
import Profile from "./Components/Diplomate/Profile/Profile";
import DiplomateMoc from "./Components/Diplomate/Diplomate.MOC/Diplomate";

export const App = () => {
  return (
    <div className={styles.main}>
      <RouterProvider router={router} />
      {/* <Profile/> */}
      {/* <DiplomateMoc/> */}
    </div>
  );
};

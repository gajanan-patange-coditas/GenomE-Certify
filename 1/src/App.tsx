import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";  
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.main}>
      <RouterProvider router={router} />
    </div>
  );
};

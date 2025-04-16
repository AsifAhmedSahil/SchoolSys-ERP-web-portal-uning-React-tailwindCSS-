// import { createBrowserRouter } from "react-router-dom";
// import {Dashboard} from "../Layout/Dashboard";
import { BrowserRouter as Router } from "react-router-dom";
import { DashboardRouter } from "../Layout/DashboardRoute";

// const router = createBrowserRouter([
//     {
//         path:"/",
//         element:<Dashboard/>
//     }
// ])

// export default router

export const AppRouting = () => {
  return (
    <>
      <Router>
        <DashboardRouter />
      </Router>
    </>
  );
};

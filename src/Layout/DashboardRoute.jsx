import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
};

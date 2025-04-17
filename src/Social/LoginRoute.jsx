import { Route, Routes } from "react-router-dom";

import Login from "./Login";

export const LoginRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

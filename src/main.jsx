import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'

import { RouterProvider } from "react-router-dom";
import  { AppRouting } from "./router/index.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <RouterProvider router={AppRouting} /> */}
      <AppRouting/>
    </Provider>
  </StrictMode>
);

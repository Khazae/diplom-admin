import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Provider } from "react-redux";
import { store } from "./store";

import router from "./router";

import "./assets/styles/global.css";

dayjs.locale("ru");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routs from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { persistoer, store } from "./redux/api/store.ts";
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistoer}>
      <RouterProvider router={routs} />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

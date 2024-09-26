import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { LoginPage } from "./auth/pages/";

const user = true;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>{user ? <App /> : <LoginPage />}</StrictMode>
  </BrowserRouter>
);


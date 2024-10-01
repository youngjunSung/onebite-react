import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom"; // 브라우저의 현재 주소를 저장/감지하는 역할

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
);

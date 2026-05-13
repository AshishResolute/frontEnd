import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import { Greet } from "./App.jsx";
import Add from "./components/add.jsx";
import Footer from "../exercises/footer.jsx";
import MainContent from "../exercises/main.jsx";
import Header from "../exercises/header.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
);

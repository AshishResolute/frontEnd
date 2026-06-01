import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import { Greet } from "./App.jsx";
// import Add from "./components/add.jsx";
// import Footer from "../exercises/footer.jsx";
// import MainContent from "../exercises/main.jsx";
// import Header from "../exercises/header.jsx";

import App from './App.jsx';
import { JSxXRules } from "../exercises/exercise-2/JSXRules.jsx";
import { ShowExpressions } from "../exercises/exercise-2/expressions.jsx";
import { AddElementsToDOM, ShowUserInfo } from "../exercises/exercise-2/refresh.jsx";
import { UserList } from "../exercises/exercise-2/render.jsx";
import { Expressions } from "../exercises/exercise-2/App.jsx";
import { PropsApp } from "./props/intro.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header />
    <MainContent />
    <Footer /> */}

    {/* <App/>
    <JSxXRules/>
    <ShowExpressions/>
    <AddElementsToDOM/>
    <Expressions/> */}
    <PropsApp/>
  </StrictMode>,
);

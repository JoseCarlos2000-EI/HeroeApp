import React  from "react";
import ReactDOM from "react-dom/client";
import { HeroesApp } from "./HeroesApp";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
        <HeroesApp></HeroesApp>
    </React.StrictMode>
);
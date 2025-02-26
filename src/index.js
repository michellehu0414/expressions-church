import React from "react";
import { createRoot } from "react-dom/client";
import GetInvolved from "./pages/index/sections/GetInvolved";
import Intro from "./pages/index/sections/Intro";
import "./index.scss";

const App = () => (
    <div>
        <GetInvolved />
        <Intro />
    </div>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);

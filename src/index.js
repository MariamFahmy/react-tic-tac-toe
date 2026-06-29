import {StrictMode} from "react";
import {createRoot} from "react-dom/client";  // the library that talks to web browsers
import "./styles.css";  // styles for the components

import App from "./App";

// The final product is injected into public/index.html
const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)
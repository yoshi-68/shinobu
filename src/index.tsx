import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import CharaSelect from "./CharaSelect";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const charaSelect = ReactDOM.createRoot(
    document.getElementById("charaSelect") as HTMLElement
);
charaSelect.render(
    <>
        <CharaSelect />
    </>
);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();

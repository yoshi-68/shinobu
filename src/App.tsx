import React, { useState } from "react";

import "./App.css";
import logo from "./logo.svg";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{count}</p>
                <button
                    onClick={() => {
                        console.log();
                        setCount(window.electron.counter(count));
                    }}
                >
                    count
                </button>
            </header>
        </div>
    );
}

export default App;

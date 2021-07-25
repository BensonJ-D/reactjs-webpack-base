import React, {useState} from "react";
import {Button, Input, MenuItem, Select} from "@material-ui/core";
import * as serviceWorker from "./serviceWorker";

function App() {
    const [iterations, setIterations] = useState("")
    const [microsecondDelay, setMicrosecondDelay] = useState("")

    // const submit = (iterations, microsecondDelay) => {
    // }

    return (
        <div>

        </div>
    );
}

serviceWorker.register();

export default App;

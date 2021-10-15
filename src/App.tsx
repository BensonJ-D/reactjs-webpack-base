import React, {useState} from "react";
import {Button, Input, MenuItem, Select} from "@mui/material";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function App() {
    return (
        <div>
            Test update
        </div>
    );
}

Enzyme.configure({ adapter: new Adapter() });

export default App;

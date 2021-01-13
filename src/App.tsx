import React, {useState} from 'react';
import './App.css';
import {Visual} from "./Components/Visual/Visual";
import {ExactButton} from "./Components/Buttons/ImprecisionButton";

export type  StateValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {
    let [value, setValue] = useState<StateValueType>(0)

    function groupCallback(action: string ) {
        if (action === "increment") {
            if (value === 0) setValue(1)
            else if (value === 1) setValue(2)
            else if (value === 2) setValue(3)
            else if (value === 3) setValue(4)
            else if (value === 4) setValue(5)
        }
        else setValue(0)
    }

    return (
        <div className="App">
            <div className={"Wrap"}>
                <Visual valueOfNumber={value}/>
                <div className={"button-wrap"}>
                    <ExactButton
                        action={"increment"}
                        actionGroups={groupCallback}
                        isDisabled={value === 5}
                        textValue={"inc"}
                    />
                    <ExactButton
                        action={""}
                        actionGroups={groupCallback}
                        isDisabled={value === 0}
                        textValue={"reset"}/>
                </div>

            </div>
        </div>
    );
}

export default App;

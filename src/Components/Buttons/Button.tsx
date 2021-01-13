import React, {useState} from "react";
import {StateValueType} from "../../App";
import b from "./Button.module.css"

type ButtonPropsType = {
    actionGroups: (action: string) => void
    stateValue: StateValueType
    textValue: string

}

export function Button(props: ButtonPropsType) {
    let [disable, setDisable] = useState(false)
    return (
        <div className={"button-wrap"}>
            <button className={props.stateValue === 5? b.dis : ""} disabled={props.stateValue !== 5? disable : !disable }   onClick={() => props.actionGroups("increment")}>incr</button>
            <button className={props.stateValue !== 0? "" : b.dis} disabled={props.stateValue !== 0? disable : !disable } onClick={() => props.actionGroups("")} >{props.textValue}</button>
        </div>
    )
}
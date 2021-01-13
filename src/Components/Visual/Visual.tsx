import React from "react";
import {StateValueType} from "../../App";
import v from "./Visual.module.css"

type VisualPropsType = {
    valueOfNumber: StateValueType
}

export function Visual(props: VisualPropsType) {
    return (
        <div className={"visual"}>
            <div className={props.valueOfNumber === 5 ? v.dis : undefined}>{props.valueOfNumber}</div>
        </div>
    )
}

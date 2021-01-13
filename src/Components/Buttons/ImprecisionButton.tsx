import React from "react";
import b from "./Button.module.css"

type ExactButtonPropsType = {
    actionGroups: (action: string) => void
    textValue: string
    action: string
    isDisabled: boolean
}

export function ExactButton(props: ExactButtonPropsType) {
    return <button className={props.isDisabled ? b.dis : ""}
                       disabled={props.isDisabled}
                       onClick={() => props.actionGroups(props.action)}>{props.textValue}
        </button>


}
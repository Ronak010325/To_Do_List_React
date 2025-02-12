import React from "react";

function Input(props) {
    return (
        <div className="form">
            <input onChange={(event) => props.onChange(event)} type="text" name="task" value={props.value} />
            <button onClick={() => {props.onClick()}}><span>Add</span></button>
        </div>
    )
}

export default Input;
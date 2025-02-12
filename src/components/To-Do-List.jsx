import React from "react";

function Li(props) {
    // const [style, setStyle] = useState("none");

    // function handleChanges() {
    //     setStyle((style === "none") ? "line-through" : "none")
    // }
    // style={{textDecoration:style}}
    // onClick={handleChanges}
    return <li onClick={() => {
            props.onClick(props.id)
        }
    }> {props.task} </li>
}

export default Li;
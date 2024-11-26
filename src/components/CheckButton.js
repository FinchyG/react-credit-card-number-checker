import React from "react";

function CheckButton(props) {

    const CheckButtonStyle = {
        marginTop: "2rem",
        borderRadius: "2rem",
        padding: "0.6rem"
    }

    return (
        <button 
            onClick={props.onClick}
            style={CheckButtonStyle}
        >
            Check
        </button>
    )
}

export default CheckButton;
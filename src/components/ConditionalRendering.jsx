import React from "react";

export default function ConditionalRendering() {
    const [message, setMessage] = React.useState(["a", "b"]);
    let text

    if (message.length === 0) {
        text = "You have no messages";
    }else if (message.length === 1) {
        text = "You have 1 message";
    } else {
        text = `You have ${message.length} messages`;
    }
    

    return (
        <div>
            <h2>Conditional Rendering</h2>
            <h3>{text}</h3>
        </div>

    )
}
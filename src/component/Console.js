// import { useState, useRef } from "react";

export default function Console() {
    let i = 0;
    const handleClick = () => {
        console.log(i);
        i++;
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}
import React from "react";
import "./Counter.css"

const Counter = ({ cantidadClicks }) => {
    return(
        <div className="counter">{cantidadClicks}</div>
    )
}

export default Counter;
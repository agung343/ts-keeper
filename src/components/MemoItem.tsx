import React from "react";
import "./MemoItem.css";

const MemoItem: React.FC<{title: string, content: string, onDelete:() => void}> = (props) => {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={props.onDelete}>-</button>
        </div>
    )
}

export default MemoItem
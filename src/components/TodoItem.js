import React from "react"

function TodoItem(props) {
    function alarmBell() {
        alert("This is an alarm!")
    }
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed} onChange={alarmBell}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem
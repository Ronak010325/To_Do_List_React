import React, { useState } from "react";
import Li from "./To-Do-List";
import Input from "./InputArea";

function Content() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    function addTask() {
        setTaskList(prevValue => {
            return [...prevValue,task] 
        })
        setTask("")
    }

    function handleChanges (event) {
        setTask(event.target.value)
    }

    function deleteItem(id) {
        setTaskList(prevValue => {
            return prevValue.filter((task, indexOfTask) => {
                return indexOfTask !== id; //it will return all the tasks which are not equal to the id passed into the function
            })
        })
    }

    return (
        <div>
            <Input onChange={handleChanges} onClick={addTask} value={task} />
            <ul>
                {taskList.map((task, index) => <Li 
                                                key={index}
                                                id={index}
                                                task={task} 
                                                onClick={deleteItem} /> )}
            </ul>
        </div>
    )
}

export default Content;
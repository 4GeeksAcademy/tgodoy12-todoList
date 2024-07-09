import React from "react";

const Delete = (props) => {
    const deleteTask = () =>{
        const newTasksList = props.taskList.filter((_,index)=> index !== props.id);
        props.setTask(newTasksList);
    }
    
    return(
       <span><button id={props.id} type="button" className="btn-close" aria-label="Close" onClick={deleteTask}></button></span>
       
    );
}

export default Delete;
import React from "react";


const List = (props) => {
    return (
        <ul className="list-group list-group-flush">
            {props.taskAdded.map((element, index) => (
                <li key={index} className="list-group-item">{element}</li>
            ))}
        </ul>
    ) 
    
}

export default List;
import React from "react";
import Delete from "./delete";


const List = (props) => {
    return (
        
        <div className="d-flex justify-content-between">
            <ul className="list-group list-group-flush">
            {props.taskAdded.map((element, index) => (
                
                <li key={index} className="list-group-item">{element}<Delete/></li>
                
            ))}
            
        </ul>
        
        </div>
        

        
    ) 
    
}

export default List;
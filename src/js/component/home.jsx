import React, {useState} from "react";
import Input from "./input";
import List from "./list";

//create your first component
const Home = () => {

	const [task, setTask] = useState("");
	const [listTask, setListTask] = useState([])

	const addTask = (e) => {
		setTask(e.target.value);
		
	}

	const addListTask = (e) => {
		if(e.keyCode === 13 && e.key !== "") {
			setListTask(listTask.concat(e.target.value))
			setTask("");
		}
		
	}

	console.log(listTask);






	return (
		<div className="container">
			<div className="card w-50 mx-auto mt-5">
				<Input onChange={addTask} value={task} onKeyDown={addListTask}/>
				

				<List taskAdded={listTask} setTask={setListTask}/>

				

				<div className="card-footer">
    				Card footer
  				</div>
			</div>
		</div>
	);
};

export default Home;

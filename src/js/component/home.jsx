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
			<div className="w-50 mx-auto mt-5 text-center">
				<p className="fs-1 m-0 text-secondary fw-bolder">TODO List</p>
			</div>
			
			<div className="card w-50 mx-auto mt-5">
				
				<Input onChange={addTask} value={task} onKeyDown={addListTask}/>
				<List taskAdded={listTask} setTask={setListTask}/>			

				<div className="card-footer">
					<div className="items-left">
						<p className="text-black-50 m-0" style={{ fontSize: "smaller" }}>
							{listTask.length} item{listTask.length !== 1 ? 's' : ''} left
						</p> 
					</div>
  				</div>

			</div>
		</div>
	);
};

export default Home;

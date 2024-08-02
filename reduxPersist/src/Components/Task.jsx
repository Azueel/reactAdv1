import React, { useState } from 'react';

const ToDoList = () => {
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState('');

	const addTask = () => {
		if (task.trim()) {
			setTasks([...tasks, task]);
			setTask('');
		}
	};

	const removeTask = (index) => {
		const newTasks = tasks.filter((_, i) => i !== index);
		setTasks(newTasks);
	};

	return (
		<div>
			<input
				type="text"
				placeholder="Add a task"
				value={task}
				onChange={(e) => setTask(e.target.value)}
				data-testid="task-input"
			/>
			<button onClick={addTask} data-testid="add-task-btn">
				Add Task
			</button>

			<ul data-testid="task-list">
				{tasks.map((t, index) => (
					<li key={index}>
						{t}
						<button
							onClick={() => removeTask(index)}
							data-testid={`remove-task-btn-${index}`}
						>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ToDoList;

import React, { useState } from "react";
import styles from "./TodoForm.module.css";

// UUID
import { v4 as uuidv4 } from "uuid";

const TodoForm = (props) => {
	// FOR GETTING INPUT VALUE
	const [todoInput, setTodoInput] = useState("");

	// GET INPUT VALUE
	const inputChangeHandler = (e) => {
		setTodoInput(e.target.value);
	};

	// SUBMIT HANDLER
	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (todoInput.trim().length === 0) {
			setTodoInput("");
			return;
		}

		props.addTodo((prev) => {
			return [{ id: uuidv4(), text: todoInput.trim() }, ...prev];
		});
		setTodoInput("");
	};

	return (
		<form onSubmit={formSubmitHandler} className={styles.form}>
			<input
				placeholder="Add a Todo"
				value={todoInput}
				onChange={inputChangeHandler}
				autoFocus
			/>
			<button typeof="submit">Add Todo</button>
		</form>
	);
};

export default TodoForm;

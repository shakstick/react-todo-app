import React, { useState } from "react";
import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";
import { Fragment } from "react";

function TodoList(props) {
	// SHOW UPDATE FORM OR NOT!
	const [showUpdate, setShowUpdate] = useState(false);

	// UPDATE INPUT VALUE
	const [updateInputValue, setUpdateInputValue] = useState("");

	// GET ID FOR EDIT TODO FROM TODO-ITEM
	const [specificId, setSpecificId] = useState("");

	// FORM SUBMIT HANDLER
	const formSubmitHandler = (e) => {
		e.preventDefault();

		if (updateInputValue.trim().length === 0) {
			setUpdateInputValue("");
			setShowUpdate(false);
			return;
		}

		// UPDATE TODO
		props.todos.find((todo) => todo.id === specificId).text =
			updateInputValue.trim();

		setUpdateInputValue("");
		setShowUpdate(false);
	};

	// GET VALUE FROM INPUT
	const inputValueHandler = (e) => {
		setUpdateInputValue(e.target.value);
	};

	return (
		<Fragment>
			{!showUpdate && (
				<ul className={styles.ul}>
					{props.todos.map((todo) => {
						return (
							<TodoItem
								key={todo.id}
								id={todo.id}
								text={todo.text}
								addTodo={props.addTodo}
								setShowUpdate={setShowUpdate}
								setSpecificId={setSpecificId}
								setUpdateInputValue={setUpdateInputValue}
							/>
						);
					})}
				</ul>
			)}

			{showUpdate && (
				<form onSubmit={formSubmitHandler} className={styles.form}>
					<input
						onChange={inputValueHandler}
						autoFocus
						value={updateInputValue}
					/>
					<button typeof="submit">Update Todo</button>
				</form>
			)}
		</Fragment>
	);
}

export default TodoList;

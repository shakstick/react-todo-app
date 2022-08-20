import React, { useState } from "react";
import { AiFillCloseSquare, AiTwotoneEdit } from "react-icons/ai";
import styles from "./TodoItem.module.css";
function TodoItem(props) {
	// IS A TODO DONE OR NOT!
	const [isDone, setIsDone] = useState(false);

	// CLICK TO DO TODO!
	const toggleTodo = () => {
		setIsDone((prev) => !prev);
	};

	// EDIT TODO ICON HANDLER
	const editTodo = () => {
		props.setShowUpdate(true);
		props.setUpdateInputValue(props.text);
		props.setSpecificId(props.id);
	};

	// DELETE TODO ICON HANDLER
	const deleteTodo = () => {
		props.addTodo((prev) => {
			return prev.filter((todo) => {
				return todo.id !== props.id;
			});
		});
	};

	return (
		<li onClick={toggleTodo} className={`${isDone && styles.done}`}>
			<p>{props.text}</p>
			<div className={styles.icons}>
				<AiTwotoneEdit onClick={editTodo} />
				<AiFillCloseSquare onClick={deleteTodo} />
			</div>
		</li>
	);
}

export default TodoItem;

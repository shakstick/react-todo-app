import React, { useState, Fragment } from "react";
import TodoForm from "./TodoForm";
import styles from "./Todo.module.css";
import TodoList from "./TodoList";

function Todo() {
	const [todoList, setTodoList] = useState([]);

	return (
		<Fragment>
			<h1 className={styles["header-text"]}>What's the Plan for Today?</h1>
			<TodoForm addTodo={setTodoList} />
			<main>
				<TodoList todos={todoList} addTodo={setTodoList} />
			</main>
		</Fragment>
	);
}

export default Todo;

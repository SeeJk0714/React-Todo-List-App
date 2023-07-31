// import { TodoItem } from "./TodoItem";
// import { AddTodoForm } from "./AddTodoForm";
import { useState } from "react";

export const TodoList = (props) => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    return (
        <div className="card-body">
            <h3 className="card-title mb-3">My Todo List</h3>
            <ul className="list-group">
                {todos.map((item, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <button
                                onClick={() => {
                                    const newTodos = todos.map((itemupdate) => {
                                        if (itemupdate.id === item.id) {
                                            const newItem = { ...itemupdate };
                                            if (
                                                itemupdate.isCompleted === false
                                            ) {
                                                return (newItem.isCompleted = true);
                                            } else if (
                                                itemupdate.isCompleted === true
                                            ) {
                                                return (newItem.isCompleted = false);
                                            }
                                        } else {
                                            return itemupdate;
                                        }
                                    });
                                    setTodos(newTodos);
                                }}
                                className={`btn btn-sm ${
                                    item.isCompleted
                                        ? "btn-success"
                                        : "btn-light"
                                }`}
                            >
                                <i
                                    className={`bi ${
                                        item.isCompleted
                                            ? "bi-check-square"
                                            : "bi-square"
                                    }`}
                                ></i>
                            </button>
                            <span
                                className={`ms-2 ${
                                    item.isCompleted
                                        ? "text-decoration-line-through"
                                        : " "
                                }`}
                            >
                                {item.text}
                            </span>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    const newTodos = todos.filter(
                                        (itemTodos) => itemTodos.id !== item.id
                                    );
                                    setTodos(newTodos);
                                }}
                                className="btn btn-sm btn-danger"
                            >
                                <i className="bi bi-trash"></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="mt-4">
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        setTodos([
                            ...todos,
                            {
                                id: Math.random(),
                                text: input,
                                isCompleted: false,
                            },
                        ]);
                        setInput("");
                    }}
                    className="d-flex justify-content-between align-items-center"
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Add new item..."
                        value={input}
                        onChange={(event) => {
                            setInput(event.target.value);
                        }}
                        required
                    />
                    <button className="btn btn-primary btn-sm rounded ms-2">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

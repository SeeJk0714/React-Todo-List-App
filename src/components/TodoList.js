// import { TodoItem } from "./TodoItem";
// import { AddTodoForm } from "./AddTodoForm";
import { useState } from "react";

export const TodoList = (props) => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    // const addButton = () => {
    //     const newTodos = [...todos];
    //     newTodos.push({
    //         id: newTodos.length + 1,
    //         name: input,
    //     });
    //     setTodos(newTodos);
    //     setInput("");
    // };

    return (
        <div className="card-body">
            <h3 className="card-title mb-3">My Todo List</h3>
            <ul className="list-group">
                {/* {todos.map((item, index) => {
                    return <TodoItem item={item} key={index} />;
                })} */}
                {todos.map((item, index) => (
                    <li
                        key={index}
                        className="list-group-item d-flex justify-content-between align-items-center"
                    >
                        <div>
                            <button className="btn btn-sm btn-ligh">
                                <i className="bi bi-square"></i>
                            </button>
                            <span className="ms-2">{item.text}</span>
                        </div>
                        <div>
                            <button className="btn btn-sm btn-danger">
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
                        const newTodos = [...todos];
                        newTodos.push({
                            id: newTodos.length + 1,
                            text: input,
                        });
                        setTodos(newTodos);
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
                    <button
                        // onClick={props.addButton}
                        className="btn btn-primary btn-sm rounded ms-2"
                    >
                        Add
                    </button>
                </form>
            </div>
            {/* <AddTodoForm addButton={addButton} /> */}
        </div>
    );
};

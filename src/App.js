import { TodoList } from "./components/TodoList";

// const todos = [
//     {
//         id: 1,
//         text: "Task 1",
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         text: "Task 2",
//         isCompleted: false,
//     },
//     {
//         id: 3,
//         text: "Task 3",
//         isCompleted: false,
//     },
// ];

function App() {
    return (
        <div className="App">
            <div className="card rounded shadow-sm">
                <TodoList />
            </div>
        </div>
    );
}

export default App;

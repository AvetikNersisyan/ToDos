import './App.css';
import {useState} from "react";
import ToDoList from "./ToDoList";

function App() {
    const [todo, setTodo] = useState([
        {text: "Learn React", id: Math.random(), completed: false},
        {text: "Go shopping", id: Math.random(), completed: false},
        {text: "Start new Project", id: Math.random(), completed: false},
    ]);

    const onAdd = (text) => {
        setTodo([
            ...todo,
            {text: text, id: Math.random(), completed: false}
        ]);
    };

    return (
        <div className="App">
            <ToDoList
                onChange={(newTodo) => setTodo(todo.map(todo => {
                    if (todo.id === newTodo.id) return newTodo;
                    return todo;
                }))}
                todo={todo} onAdd={onAdd} length={todo.length} completed={todo.filter(item => item.completed).length}
                onClear={() => {
                    setTodo(todo.filter(item => !item.completed));
                }}
                onDelete={(t) => setTodo(todo.filter(item => item.id !== t.id))}
            />
        </div>
    );
}

export default App;

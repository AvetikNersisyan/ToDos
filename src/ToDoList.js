import ToDoSingle from "./ToDoSingle";
import ToDoForm from "./ToDoForm";
import ToDoFooter from "./ToDoFooter";

export default function ToDoList({todo, onAdd, length, completed, onChange, onClear, onDelete}) {
    return (
        <div className={"container"}>
            <ToDoForm onAdd={onAdd}/>
            <div className={"List"} >
                {todo.map((item,idx) => {
                    return <ToDoSingle key={idx} todo={item} onChange={onChange} onDelete={onDelete}/>
                })}
            </div>
            <ToDoFooter length={length} completedLen={completed} onClear={onClear}/>
        </div>
    );
}
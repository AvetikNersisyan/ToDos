export default function ToDoSingle({todo, onChange, onDelete}) {
    return (
        <div>
            <label key={todo.id} className={"singleItem"}>
                <input type={"checkbox"} checked={todo.completed}
                       onChange={e => onChange({...todo, completed: e.target.checked})}/>
                {todo.text}
                <button onClick={(e) => onDelete(todo)}>X</button>
            </label>
        </div>
    );
}
export default function ToDoFooter ({completedLen, length, onClear}) {
    return (
        <div className={"footer"}>
            <span> {completedLen}/{length} completed</span>
            <button onClick={onClear}> Clear Completed</button>
        </div>

    )
}
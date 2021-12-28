import {useState} from "react";

export default function  ToDoForm ({onAdd}){
    const [input, setInput] = useState("")


    return (

            <form onSubmit={e => {
                e.preventDefault()
                if (!input.trim()) return
                onAdd(input)
                setInput("")
            }}>
                <input value={input} onChange={e => setInput(e.target.value)} type={"text"} />
                <button> Add </button>

            </form>

    )
}
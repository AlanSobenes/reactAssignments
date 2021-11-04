import { useState } from 'react'

const ToDoForm = (props) => {
    const addTask = props.addListItem
    const [task, setTask] = useState('')

    const submit = (e) => {
        e.preventDefault();
        
        const newTask = {
            text: task,
            status: false,
        }
        
        addTask(newTask)
        setTask('');
    }

    return (
        <form onSubmit={(e) => submit(e)}>
            <label>Add a Task: </label>
            <input type="text" onChange={(e) => setTask(e.target.value)} value={task}/>
            <input type="submit" value='Add' />
        </form>

    )


}
export default ToDoForm
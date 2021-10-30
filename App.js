import './App.css';
import { useState } from 'react';

    const InputTasks = ({ setTasks, tasks }) => {
    const [description, setDescription] = useState("Напиши задание!")
    const getTask = (_description) => {
    return {
    id: tasks.length + 1,
    description: _description,
    created_at: new Date()
}
}

    const createTask = () => {
    const tasksCopy = [...tasks]
        if (description !== "" && description !== "Напиши задание!" && description.length < 45)
        tasksCopy.push(getTask(description))
        setTasks(tasksCopy)
}
    return (
    <div>
    <input
    type="text"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    />
    <button onClick={() => createTask()} className="Save">Сохранить</button>
    </div>
    )
}

    function App() {
    const [tasks, setTasks] = useState([])
        const deleteTask = (id) => {
            const filteredTasks = tasks.filter((task) => task.id !== id)
            setTasks(filteredTasks)
    }
        const CompleteTask = (id) => {
        const taskCopy = [...tasks]
            const completeTask = taskCopy.find((task) => task.id === id)
            completeTask.status = "done"
            setTasks(taskCopy)

    }
        return (
    <div key={tasks.length}>
        <div className={"tasks"} >
            {tasks.map((task) => {
                return (<div className={"task"} key={`${task.id} - ${task?.status}`}>
                    <span className={`${task.status === "done" ? "done" : ""}`}>{task.id}. {task.description}</span>
                    <button onClick={() => deleteTask(task.id)} className="Delete">Удалить</button>
                    {task.status !== "done" && <button onClick={() => CompleteTask(task.id)} className="Complete">Выполнено</button>}
                </div>)
            })}
        </div>
    <InputTasks setTasks={setTasks} tasks={tasks}/>
    </div>
    );
}
export default App;
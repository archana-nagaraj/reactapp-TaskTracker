//  hook called useState from react directory
import { useState } from "react"
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App = () => {
const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Shopping - pickup',
        day: 'Sep 1st at 4:00PM',
        reminder: true,
    },
    {
        id:2,
        text: 'Shopping - drop',
        day: 'Sep 2st at 5:00PM',
        reminder: true,
    },
    {
        id:3,
        text: 'Shopping ',
        day: 'Sep 3st at 1:00PM',
        reminder: false,
    },
])

// Add Task

const addTask = (task) => {
  //console.log(task);
  const id = Math.floor(Math.random() * 10000) + 1;
  console.log(id);
  const newTask = { id, ...task }
  setTasks ([...tasks, newTask])
}

// Delete Task
const deleteTask = (id) => {
  //console.log('delete', id);
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder

const toggleReminder = (id) => {
  //console.log('toggle', id);
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className = "container"> 
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd = { showAddTask }/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ? <Tasks 
      tasks = {tasks} 
      onDelete = {deleteTask}
      onToggle = {toggleReminder}
      /> : 'No Tasks to Show'}
    </div>
  )
}

export default App;

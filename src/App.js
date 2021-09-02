//  hook called useState from react directory
import { useState } from "react"

import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
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
      <Header />
      {tasks.length > 0 ? <Tasks 
      tasks = {tasks} 
      onDelete = {deleteTask}
      onToggle = {toggleReminder}
      /> : 'No Tasks to Show'}
    </div>
  )
}

export default App;

import React,{useState, useEffect} from 'react';
import './app.css';
import './header'

const API ='http://task.us-west-2.elasticbeanstalk.com/task'

function Tasks(){
  const [tasks, setTasks] = useState([]);
  const _getTasks = () =>{
    fetch(API, {
     mode:'cors' ,
    })
    .then(data => data.json())
    .then(tasks => setTasks(tasks))
    .catch(console.error);

  };
  useEffect(_getTasks, []);
  return(<ul>
    {tasks.map((listedTask)=>
      <li> key={listedTask.id}
      <p>Task:{listedTask.title}</p>
      <p>Description: {listedTask.description}</p>
      <p>Status: {listedTask.status}</p>
      <p>Assignee: {listedTask.assignee}</p>

      </li>
      )}
  </ul>)

}
function App() {
  return (
    <>
    <header />
    <main><Tasks /></main>
    </>
  );
}

export default App;

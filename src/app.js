import React,{useState, useEffect} from 'react';
import './app.scss';
import logo from './logo.svg'
import Header from './header'

const API ='http://task.us-west-2.elasticbeanstalk.com/task'

function Task(){

  const [task, setTask] = useState([]);

  const _getTask = () => {
    fetch(API, {
    mode:'cors',
    })
    .then( data => data.json() )
    .then( tsk => setTask(tsk) )
    .catch(console.error);

  };

  useEffect(_getTask, []);

  return(
      <ul>
        {task.map((list) =>
          <li key={list.id}>
              <p>Task:{list.title}</p>
              <p>Description: {list.description}</p>
              <p>Status: {list.status}</p>
              <p>Assignee: {list.assignee}</p>
          </li>
          )}
      </ul>
  )
}

function App() {
  return (
    <>
    <Header />
    <main>
        <Task />
    </main>

    </>
  );
}

export default App;

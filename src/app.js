import React,{useState, useEffect} from 'react';
import './app.scss';
import logo from './logo.svg'
import Header from './header'

const API ='http://task.us-west-2.elasticbeanstalk.com/task'
//const API='http://localhost:5000/task'

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
    <div className="App">

     {task.map( (eachTask) =>

              <li key={eachTask.id}>
                      <p>Task: {eachTask.title}</p>
                      <p>Description: {eachTask.description}</p>
                      <p>Status: {eachTask.status}</p>
                      <p>Assignee: {eachTask.assignee}</p>
                      <img src={eachTask.imageUrl} />
                      <form action={`${API}s/${eachTask.id}/images`} method="post" encType="multipart/form-data">
                      <label>
                        <span>Upload Image</span>
                        <input name="file" type="file" />
                      </label>
                      <button>Save</button>
                       </form>
               </li>
)
}
</div>
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

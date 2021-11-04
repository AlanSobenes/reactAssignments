import './App.css';
import React, { useState } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm'

function App() {

  const [list, setList] = useState([
    { text: 'Wash the dishes', completed: false },
    { text: 'Go to the Gym', completed: true },
    { text: 'Take out the trash', completed: false }
  ]);

  const addListItem = (task) => {
    const copyList = [...list]
    copyList.push(task)
    setList(copyList)
  }

  const update = (idx) => {
    const copyList = [...list];
    if(copyList[idx].completed === true){
      copyList[idx].completed = false;
    } else { 
      copyList[idx].completed = true;
    } 
    setList(copyList);
  }

  const deleteTask = (deleteIdx) => {
    console.log(deleteIdx)
    const filteredTasks = list.filter((e, idx) => {
      if(deleteIdx !== idx) {
          return true;
      } else return false;
    })
    setList(filteredTasks)
  }


  return (
    <div className='App'>
      <ToDoForm addListItem={addListItem} />
      <ToDo list={list} deleteTask={deleteTask} update={update}/>
    </div>
  );
};

export default App;

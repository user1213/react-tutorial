import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import './index.css';

function App() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  let count = 0;

  const update = e => {
    setTask(e.target.value);
  };

  const reset = () => {
    setTask('');
  };

  const closeTask = (id) => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };

  const addTask = e => {
    if (e.keyCode === 13 && task !== '') {
      debugger;
      setList(list.concat({
        id: window.crypto.randomUUID(),
        taskValue: task,
      }));
      reset();
    }
  }

  return (
    <div className="App">
      <div className='content'>
        <input type="text" placeholder='Enter task...' onChange={update} onKeyDown={addTask} value={task}/>
        <div className='taskList'>
        {
          list.map(item => {
            const {id, taskValue} = item;
            return (
              <div key={id}>{taskValue}
                <span className='closeButton' onClick={() => closeTask(id)}><FontAwesomeIcon icon={faClose} /></span>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  );
}

export default App;

// import React from 'react'
import './App.css'
import {useState, useEffect} from 'react'
import Index from './components/index/index.component'
// import Item from './components/create/create.component'

const App = () => {

  const [inpName, setInpName] = useState('');
  const [inpDesc, setInpDesc] = useState('');
  const [todoList, setTodoList] = useState([]);
  var [temp, setTemp] = useState(1);

  //localStorage.setItem('ToDo-List', JSON.stringify(todoList));
  // console.log('render');

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem('ToDo-List'));
    existingList && existingList.length > 0 && setTodoList(existingList);
  }, [])

  const addItems = (inpName, inpDesc) => {
    if(inpName === '' || inpDesc === '')
      return;
    // console.log('render 2');
    const newList = [...todoList, {id: temp, name: inpName, description: inpDesc}];
    setTodoList(newList);

    localStorage.setItem('ToDo-List', JSON.stringify(newList));
    // temp++;
    setTemp(temp+1);
  }
  // console.log('render 3');
  return (
    <div>

      <div className='form'>
        <div>
          <label>Name :</label>
          <input
            className='name-input'
            value={inpName}
            onChange={(event) => setInpName(event.target.value)}
          />
        </div>
        <div>
          <label>Description :</label>
          <input
            className='desc-input'
            value={inpDesc}
            onChange={(event) => setInpDesc(event.target.value)}
          />
        </div>
        <button className='save-button' onClick={() => addItems(inpName, inpDesc)} type="button">Save</button>
      </div>

      <Index todoList={todoList}/>

    </div>
  );

}

export default App;

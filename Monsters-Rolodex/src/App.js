// import { Component } from 'react';

import {useState, useEffect} from 'react'

// import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = ()=>{

  // console.log('render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
  const [title, setTitle] = useState('');
  // const [stringField, setStringField] = useState('');

  console.log('render');

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));

  }, [])

  useEffect(() => {

    const newFilteredMonsters = monsters.filter((monster) => {
      return (monster.name.toLocaleLowerCase().includes(searchField));
    });

    setFilterMonsters(newFilteredMonsters);
    // console.log('effect is firing');

  }, [monsters, searchField] )

  // console.log(searchField);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    // console.log("string:", searchField);
  }

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
      setTitle(searchFieldString);
    // console.log("string:", searchField);
  }

  // const onStringChange = (event) => {
  //   setStringField(event.target.value);
  //   // console.log("String:", stringField);
  // }

  // console.log(filteredMonsters);

  return(
    <div className="App">
        <h1 className='app-title'>{title}</h1>

        <SearchBox 
          className = 'monsters-search-box'
          onChangeHandler = {onSearchChange}
          placeholder = 'search monsters'
        />
        <br />
        <SearchBox
          onChangeHandler = {onTitleChange}
          placeholder = 'set title'
        />

        {/* <SearchBox
          onChangeHandler = {onStringChange}
          placeholder = 'set string'
        /> */}

        
        <CardList monsters={filteredMonsters} />
      </div>
  )
}


// class App extends Component {

//   constructor(){
//     super();
//     // console.log('constructor');

//     this.state = {
//       monsters: [],
//       searchInput: ''
//     }
//   };

//   componentDidMount() {
//     // console.log('componentDidMount');
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => {
//         this.setState(()=>{
//           return {monsters: users};
//         },
//         // ()=>{
//         //   console.log(this.state);
//         // }
//         )
//       });
//   }

//   onSearchChange = (event)=>{

//     const searchInput = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return {searchInput};
//     });

//   };
  
//   render(){
//     // console.log("render");

//     const{monsters,searchInput} = this.state;
//     const{onSearchChange} = this;
    
//     const filteredMonsters = monsters.filter((monster) => {
//       return (monster.name.toLocaleLowerCase().includes(searchInput));
//     });
//     // console.log("Filtered:",filteredMonsters);
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox 
//           className = 'monsters-search-box'
//           onChangeHandler = {onSearchChange}
//           placeholder = 'search monsters'
//         />
//         {/* {
//           filteredMonsters.map((monster)=>{
//             return <div key={monster.id}> <h1>{monster.name}</h1> </div>;
//           })
//         } */}
        
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;

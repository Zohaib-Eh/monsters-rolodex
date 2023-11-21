/*https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram*/
//import { Component } from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBar from './components/searchbar/searchbar.component';

const App = () => {
  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filteredMonster,setFilteredMonster] = useState([]);

  useEffect(()=>{
    console.log('fire')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => setMonsters(user));
    },[]);

  useEffect(()=>{
    const newfilteredMonster = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonster(newfilteredMonster)
  },[monsters,searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  };

  return (
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBar 
        onSearchChange={onSearchChange}
        placeholder = 'Search Monsters'
        className = 'monsters-search-box'
        />
        <CardList monsters={filteredMonster}/>
      </div>
  )
}

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       monsters:[],
//       searchField:'',
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(user => this.setState(()=> {
//         return {monsters: user};
//       }));
//   };
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(()=>{
//       return {searchField};
//     });
//   };

//   render(){
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonster = monsters.filter((monster)=>{
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBar 
//         onSearchChange={onSearchChange}
//         placeholder = 'Search Monsters'
//         className = 'monsters-search-box'
//         />
//         <CardList monsters={filteredMonster}/>
//       </div>
//     );
//   }
// }

export default App;

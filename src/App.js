import React from 'react';

import { SearchBox } from './components/search-box/search-box.component.jsx';

import { CardList } from './components/card-list/card-list.component.jsx';

import './App.css';

class App extends React.Component {
  
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          inputValue={searchField}
          handleChange={this.handleChange}
          placeholder="search monster"/>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 26}
    ],
    showPeople: true
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 26}
      ]
    })
  }

  togglePeopleHandler= () => {
    const currentState = this.state.showPeople;
    this.setState({
      showPeople: !currentState
    });
  }

  render() {

    let people = null;

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.persons.map(person => {
              return <Person
                name={person.name}
                age={person.age} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
          <button onClick ={this.togglePeopleHandler}>Toggle People</button>
      {people}
    </div>
    );
  }
}

export default App;

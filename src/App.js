import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { id: 'aaa', name: 'Max', age: 28},
      { id: 'bbb', name: 'Manu', age: 29},
      { id: 'ccc', name: 'Stephanie', age: 26}
    ],
    showPeople: true
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(person => {
      return person.id === id;
    });

    const selectedPerson = {...this.state.people[personIndex]};
    selectedPerson.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = selectedPerson;
    
    this.setState({ people });
  }

  togglePeopleHandler= () => {
    const currentState = this.state.showPeople;
    this.setState({
      showPeople: !currentState
    });
  }

  deletePersonHandler = (index) => {
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({ people })
  }

  render() {
    let people = null;
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
              return <Person
                name = { person.name }
                age = { person.age }
                click = { () => this.deletePersonHandler(index) }
                key = { person.id }
                changed = { (event) => this.nameChangedHandler(event, person.id) }/>
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

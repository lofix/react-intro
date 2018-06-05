import React, { Component } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

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
      people = <People 
          people = { this.state.people }
          clicked = { this.deletePersonHandler }
          changed = { this.nameChangedHandler } />
    }

    return (
      <div className={classes.App}>
          <Cockpit 
            clicked = {this.togglePeopleHandler} />
          {people}
    </div>
    );
  }
}

export default App;

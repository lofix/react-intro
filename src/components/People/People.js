import React, { Component } from 'react';
import Person from './Person/Person';
class People extends Component {
  render() {
    return this.props.people.map((person, index) => {
      return <Person
        name = { person.name }
        age = { person.age }
        click = { () => this.props.clicked(index) }
        key = { person.id }
        changed = { (event) => this.props.changed(event, person.id) }/>
  });
  }
}

export default People;
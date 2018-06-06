import React, {Component} from 'react';
import './Person.css';
class Person extends Component {
  render(){
    return (
      <div>
        <p className="Person" onClick={this.props.click}>I'm a {this.props.name} and I'm {this.props.age} years old!</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </div>
    );
  }
}

export default Person;

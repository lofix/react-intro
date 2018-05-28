import React, {Component} from 'react';
class person extends Component {
  render(){
    return <p>I'm a {this.props.name} and I'm {this.props.age} years old!</p>;
  }
}

export default person;

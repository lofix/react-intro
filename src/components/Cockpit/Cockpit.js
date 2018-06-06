import React, { Component } from 'react';
class Cockpit extends Component {
    render() {
        return <button 
        onClick ={this.props.clicked}>Toggle People</button>;
    }
}

export default Cockpit;
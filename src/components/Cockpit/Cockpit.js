import React from 'react';

const Cockpit = (props) => {
    return (
        <button 
            onClick ={props.clicked}>Toggle People</button>
    );
}
export default Cockpit;
import React from 'react';

const person=(props)=>{

    return(
        <div>
            <h2>This is the person name {props.name} and his age is {props.age}</h2>
            <button onClick={props.clickme}>Tap to change</button>

        </div>
    );

}

export default person;
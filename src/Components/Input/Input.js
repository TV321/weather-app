import React from 'react';
import './Input.sass';

const Input = (props) =>{
    return(
        <div className="input">
            <input id="inputCity" onChange={ props.onChange } type="text" placeholder="Your City Name"/>
            <button onClick={ props.onSubmit }>Search</button>
        </div>

    )
}

export default Input;

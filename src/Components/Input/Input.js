import React from 'react';
import './Input.sass';

const Input = (props) =>{
    return(
        <div className="input">
            <input id="inputCity" onChange={ props.onChange } type="text" placeholder="City..."/>
            <button onClick={ props.onSubmit }>Submit</button>
        </div>

    )
}

export default Input;

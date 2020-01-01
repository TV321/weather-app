import React from 'react';
import './DataDisplay.sass';

const DataDisplay = (props) =>{
    return(
        <div className="display">
            <p>City: { props.city }</p>
            <p>Temp: { props.temp }</p>
            <p>Pressure: { props.pressure }</p>
            <p>Humidity: { props.humidity }</p>
        </div>

    )
}

export default DataDisplay;

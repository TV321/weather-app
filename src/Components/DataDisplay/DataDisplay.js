import React from 'react';
import './DataDisplay.sass';

const DataDisplay = (props) =>{
    const one = props.icon
    return(
        <div className="display">
            <img src={ `http://openweathermap.org/img/wn/${one}@2x.png` } alt=""/>
            <h2>{ props.city }, { props.temp } °C</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Pressure:</td>
                        <td>{ props.pressure } hpa</td>
                    </tr>
                    <tr>
                        <td>Humidity:</td>
                        <td>{ props.humidity } %</td>
                    </tr>
                    <tr>
                        <td>Max Temp:</td>
                        <td>{ props.max } °C</td>
                    </tr>
                    <tr>
                        <td>Min Temp:</td>
                        <td>{ props.min } °C</td>
                    </tr>
                    <tr>
                        <td>Feels like:</td>
                        <td>{ props.feels } °C</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default DataDisplay;

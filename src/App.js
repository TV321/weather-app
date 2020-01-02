import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import DataDisplay from './Components/DataDisplay/DataDisplay';
import './App.sass';

class App extends Component{


    state = {
        city: "",
        temp: "",
        feelsLike: "",
        tempMin: "",
        tempMax: "",
        pressure: "",
        humidity: "",
        icon: "",
        inputValue: ""
    }

    onChange = (event) => {
        this.setState({ inputValue: event.target.value })
        console.log(this.state.inputValue)
    }

    onSubmit = () =>{
        const apiKey = "71c4ce3c29929e4460d9506740399393";
        const inputCity = document.getElementById('inputCity')
        let city = this.state.inputValue;
        console.log(city);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`)
            .then(response => response.json())
            .then(resp => this.setState ( {
                city: resp.name,
                temp: resp.main.temp,
                feelsLike: resp.main.feels_like,
                tempMin: resp.main.temp_min,
                tempMax: resp.main.temp_max,
                pressure: resp.main.pressure,
                humidity: resp.main.humidity,
                icon: resp.weather[0].icon
              } ))
            .then(()=> {
                this.setState({ inputValue: "" })
                console.log(this.state.inputValue)
                inputCity.value = "";
            })
    }


    render() {
         if (this.state.city) {
            return (
                <div>
                    <Header />
                    <Input
                        onChange={ this.onChange }
                        onSubmit={ this.onSubmit }
                    />
                  <DataDisplay
                      city={ this.state.city }
                      temp={ this.state.temp }
                      pressure={ this.state.pressure }
                      humidity={ this.state.humidity }
                      icon={ this.state.icon }
                      max={ this.state.tempMax }
                      min={ this.state.tempMin }
                      feels={ this.state.feelsLike }
                  />
                </div>
            )
        } else {
            return (
                <div>
                    <Header />
                    <Input
                        onChange={ this.onChange }
                        onSubmit={ this.onSubmit }
                    />
                </div>
            )
        }

    }
}

export default App;

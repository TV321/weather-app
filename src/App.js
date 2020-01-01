import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Input from './Components/Input/Input';
import DataDisplay from './Components/DataDisplay/DataDisplay';
import './App.sass';

class App extends Component{

    // apiKey = 71c4ce3c29929e4460d9506740399393;

    state = {
        city: "",
        temp: "",
        pressure: "",
        humidity: "",
        inputValue: ""
    }

    onChange = (event) => {
        this.setState({ inputValue: event.target.value })
        console.log(this.state.inputValue)
    }

    onSubmit = () =>{
        const inputCity = document.getElementById('inputCity')
        let city = this.state.inputValue;
        console.log(city);
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=71c4ce3c29929e4460d9506740399393`)
            .then(response => response.json())
            .then(resp => this.setState ( {
                city: resp.name,
                temp: resp.main.temp,
                pressure: resp.main.pressure,
                humidity: resp.main.humidity
              } ))
            .then(()=> {
                this.setState({ inputValue: "" })
                console.log(this.state.inputValue)
                inputCity.value = "";
            })
    }


    render() {

        return (
          <div className="App">
            <header className="App-header">
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
              />
            </header>
          </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import NavBar from './components/Navbar';
import StationItem from './components/StationItem';
import './App.css';

var API_URL = 'https://api.jcdecaux.com/vls'
var API_VER = 'v1'
var API_KEY = '99523fcf9a376ebb8cd482d3e02159fb65b2fcf7'
var CITY = 'Toulouse'

class App extends Component {
  constructor() {
    super()
    this.state = {data : []};
  }

  componentDidMount() {
    this.tick();
    this.timerID = setInterval(()=> this.tick(), 120000)
  }

  tick() {
    fetch(`${API_URL}/${API_VER}/stations?apiKey=${API_KEY}&contract=${CITY}`)
      .then((res) => { return res.json(); })
      .then((json) => { this.setState({data: json}); });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar/>
        </header>
        <div>
          {this.state.data.map((elem, i) => {
            return (<StationItem key={elem.number} name={elem.address} stands={elem.available_bike_stands} bikes={elem.available_bikes}/>)
          })}
        </div>
      </div>
    );
  }
}

export default App;

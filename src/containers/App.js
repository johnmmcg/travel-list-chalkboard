import React, { Component } from 'react';
import data from '../constants/data';
import styles from '../stylesheets/index.css';
import Destination from './Destination';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      places: props.data.places
    };
  }

  crossOff(event) {
    console.log(event.target.id);
    event.target.className = "cross-off";
  }

  render() {
  let destinations = this.state.places.map(destination => {
    return (
      <Destination
        key={destination.id}
        name={destination.name}
        crossOff={this.crossOff}
      />
    )
  })

    return (
      <div id="wishlist-div" className="box-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h1>Wanderlust Wishlist</h1>
              <ul>
                {destinations}
              </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

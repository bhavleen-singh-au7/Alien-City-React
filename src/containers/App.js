import React, { Component } from 'react';
import CardList from '../components/js/CardList';
import SearchBox from '../components/js/SearchBox';
import Scroll from '../components/js/Scroll.js';
import ErrorBoundary from '../components/js/ErrorBoundary';
import Spinner from '../img/spinner.gif';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      aliens: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ aliens: users }));
  }

  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { searchfield, aliens } = this.state;

    const filteredaliens = aliens.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // keep mind - TERNARY OPERATOR 
    return !aliens.length ?
      <div className="spinner">
        <img src={Spinner} alt="loading-spinner" />
      </div> :
      (
        <div className="tc">
          <h1 className='f1'>Alien City</h1>
          <SearchBox searchChange={this.OnSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList aliens={filteredaliens} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;
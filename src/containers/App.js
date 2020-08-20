import React, { Component } from 'react';
import CardList from '../components/js/CardList';
import SearchBox from '../components/js/SearchBox';
import Scroll from '../components/js/Scroll.js';
import ErrorBoundary from '../components/js/ErrorBoundary';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  OnSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { searchfield, robots } = this.state;

    const filteredrobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    // keep mind - TERNARY OPERATOR 
    return !robots.length ?
      <h1 className='tc f1'>Loading</h1> :
      (
        <div className="tc">
          <h1 className='f1'>Alien City</h1>
          <SearchBox searchChange={this.OnSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredrobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;
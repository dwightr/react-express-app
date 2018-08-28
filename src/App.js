import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
            users: [
              // { id: 1, name: 'dwight'},
              // { id: 2, name: 'kamo'}
            ]
        }
  }

  componentDidMount() {
    this.fetchData()
    
  }

  fetchData() {
    // fetch('/users')
    fetch('/api/puppies')
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.data.map(user => (
      {
        id: `${user.id}`,
        name: `${user.name}`,
      }
    )))
    .then(users => this.setState({ users: users }))
    .catch(error => console.log('parsing failed!', error))
  }

  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ul>
          {this.state.users.map(user =>
          <li key={user.id}>{user.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;

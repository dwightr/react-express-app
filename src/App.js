import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
            users: [
            // hardcoded users for test purposes
              // { id: 1, username: 'dwight'},
              // { id: 2, username: 'kamogelo'},
              // { id: 3, username: 'remoratile'},
            ]
        }
  }

  componentDidMount() {
    // fetch('/users')
    // .then(res => res.json())
    // .then(users => this.setState({ users: users }))
    this.fetchData()
    
  }

  fetchData() {
    fetch('/api/puppies')
    // fetch('https://randomuser.me/api/?results=5&nat=us,dk,fr,gb')
    .then(res => res.json())
    // .then(parsedJSON => console.log(parsedJSON.results))
    // .then(parsedJSON => parsedJSON.data.map(user => (
    //   {
    //     name: `${user.name.first} ${user.name.last}`,
    //     username: `${user.login.username}`,
    //     email: `${user.email}`,
    //     location: `${user.location.street}, ${user.location.city}`,
    //   }
    // )))
    .then(parsedJSON => parsedJSON.data.map(user => (
      {
        id: `${user.id}`,
        name: `${user.name}`,
        // email: `${user.email}`,
        // location: `${user.location.street}, ${user.location.city}`,
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
          // <li key={user.username}>{user.username}</li>
          <li key={user.id}>{user.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;

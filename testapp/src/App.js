import React, { Component } from 'react';
import Child from './child'


class App extends Component {
  state ={
    users: [ { name: "Aakash", age: 33, belt: "red", id:1 },
      { name: "John", age: 43, belt: "pink", id:2 },
      { name: "Emily", age: 23, belt: "blue", id:3 } ]
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p> Welcome! </p>
        <Child users={this.state.users}/>
      </div>
    )
  }
}

export default App;

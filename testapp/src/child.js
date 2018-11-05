import React, { Component } from 'react';

class Child extends Component {
  render() {
    const { users } = this.props;
    const userList = users.map(user => {
      return(
        <div className="child" key={user.id}>
          <div>Name : {user.name}</div>
          <div>Age : {user.age}</div>
          <div>Belt : {user.belt}</div>
          <div>Id:{user.id}</div>
        </div>
      )
    })

    return(
      <div className="child">
        {userList}
      </div>

    )
  }
}

export default Child

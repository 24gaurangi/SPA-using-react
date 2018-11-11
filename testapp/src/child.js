import React from 'react';

const Child = ({users}) => {
  const userList = users.map(user => {
    if(user.age>25) {
    return(
      <div className="child" key={user.id}>
        <div>Name : {user.name}</div>
        <div>Age : {user.age}</div>
        <div>Belt : {user.belt}</div>
        <div>Id:{user.id}</div>
      </div>
    )
  }
  else return null
  })

  return(
    <div className="child">
      {userList}
    </div>

  )

}

export default Child

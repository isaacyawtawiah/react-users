import React from 'react'

const Users = ({users}) => {
  return (
    <div  className='grid'>
        {users.map((user, index) => 
            <div key={index} className="user">
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.gen}</p>
            </div>
        )}

    </div>
  )
}

export default Users
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axiosprc() {
  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchUsers = async () => {
    const respones = await axios.get('https://jsonplaceholder.typicode.com/users',
    { params: {userId: 3} }
    )
    setUsers(respones.data)
  }

  useEffect(() => {
    setIsLoading(true)
    fetchUsers()
    setIsLoading(false)
  }, [])

  if (isLoading) return (<>로딩중..</>)
  return (
    <div>
      {users && users.map((user) => <p>{user.username}</p>)}
    </div>
  )
}

export default Axiosprc

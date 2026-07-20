import { useState, useEffect, useCallback } from 'react'
import { createApiUrl } from '../utils/api' // named import

function Users({ type }) { // Users -> Component -> props -> {....}
  const [users, setUsers] = useState([]) // useState() ---> [a, b]
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    async function getUsers() {
      const apiUrl = createApiUrl(type)
      const apiResponse = await fetch(apiUrl)
      const response = await apiResponse.json()
      setUsers(response)
    }

    getUsers()
  }, [type])

  const createUser = useCallback((e) => {
    e.preventDefault();
    const newUser = { name, lastName, age } // 0x3352, 0x44564

    async function submitStudent() {
      const apiUrl = createApiUrl(type)
      const response = await fetch(apiUrl, {
        method: "POST", 
        body: JSON.stringify(newUser)
      })

      setUsers([...users, newUser])
      setName('')
      setLastName('')
      setAge('')
    }

    submitStudent()
  }, [name, lastName, age, type])

  const handleClear = () => {
    setUsers([])
  }

  return (
    <>
      <div className="ticks">Users form</div>

      <form>
        <div className="parent-container">
          <div>
            <label htmlFor="name">Name</label>
            <input className='name' value={name} onChange={(e) => setName(e.target.value)} type="text" />
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input className='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" />
          </div>

          <div>
            <label htmlFor="age">Age</label>
            <input className='age' value={age} onChange={(e) => setAge(e.target.value)} type="number" />
          </div>
        </div>

        <button className="register-btn" onClick={createUser}>Register</button>
        <button className="clear-btn" onClick={handleClear}>Clear</button>
      </form>

      <table className="Users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.lastName}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Users;

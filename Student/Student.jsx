import { useState, useEffect } from 'react'

function Students() {
  const [students, setStudents] = useState([])
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    async function getStudents() {
      //https://6a3828afc105017aa639b4b3.mockapi.io/api/students
      //  موقتاً گذاشتم روی teachers  مطمئن بشیم دیتا میاد بالا
      const apiResponse = await fetch("hhttps://6a26f5d5a84f9d39e9081fbd.mockapi.io/api/teachers")
      const response = await apiResponse.json()
      setStudents(response)
    }

    getStudents()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, lastName, age }
    setStudents([...students, newStudent])
    setName('')
    setLastName('')
    setAge('')
  }

  const handleClear = () => {
    setStudents([])
  }

  return (
    <>
      <div className="ticks">Students form</div>
      
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

        <button className="register-btn" onClick={handleSubmit}>Register</button>
        <button className="clear-btn" onClick={handleClear}>Clear</button>
      </form>

      <table className="Students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
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

export default Students;

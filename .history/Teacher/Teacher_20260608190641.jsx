import { useState } from 'react'



function Teachers() {
  const [teachers, setTeachers] = useState([])
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  // fill the empty teachers list from the backend response
  const response = fetch("https://6a26f5d5a84f9d39e9081fbd.mockapi.io/api/teachers")
  // response => [{id: 1, name: 'hanieh', lastName: 'yechizi', age: 18 }]

const handleSubmit = (e) => {
  e.preventDefault();

  const newTeacher = {
    name: name,
    lastName: lastName,
    age: age
  }
  setTeachers([...teachers, newTeacher])
  setName('')
  setLastName('')
  setAge('')
}   

const handleclear = () => {
  setTeachers([])
} 

  return (
    <>
<div className="ticks">Teachers form</div>
  
<form >
<div className="parent-container">

<div >
<label  htmlFor="name">Name</label>
 <input className='name'  value={name} onChange={(e) => setName(e.target.value)} type="text" />
</div>

<div >
 <label htmlFor="lastName">Last Name</label>
 <input className='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"/>
</div>
 
<div >
 <label htmlFor="age">Age</label>
 <input className='age' value={age} onChange={(e) => setAge(e.target.value)} type="number"/>
</div>

</div>

<button  className="register-btn" onClick={handleSubmit}>Register</button>
<button className="clear-btn" onClick={handleclear}>Clear</button>


</form>


<table className="Teachers-table">
  <thead>
<tr>
<th>Name</th>
<th>Last Name</th>
<th>Age</th>  
</tr>
  </thead>
  <tbody>
    {teachers.map((teacher, index) => (
      <tr key={index}>
        <td>{teacher.name}</td>
        <td>{teacher.lastName}</td>
        <td>{teacher.age}</td>
      </tr>
    ))}
  </tbody>
</table>

 </>
    
  );
}

export default Teachers;

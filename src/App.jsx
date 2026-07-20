import { useState } from 'react'
import Users from './Users/Users' 

import './App.css'


function App() {
  const [page, setPage] = useState("student")
  
 return (
    <>
      <div className="menu-btns">
        <button className={page === 'student' ? 'active' : ''} onClick={() => setPage("student")}>Student</button>
        <button className={page === 'teacher' ? 'active' : ''} onClick={() => setPage("teacher")}>Teacher</button> 
        <button className={page === 'employee' ? 'active' : ''} onClick={() => setPage("employee")}>Employees</button> 
        <button className={page === 'parent' ? 'active' : ''} onClick={() => setPage("parent")}>Parents</button> 
      </div>

      <Users type={page} />
    </>
  );
}

export default App

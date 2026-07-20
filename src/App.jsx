import { useState } from 'react'
import Users from './Users/Users' 

import './App.css'


function App() {
  const [page, setPage] = useState("student")
  
 return (
    <>
      <div className="menu-btns">
        <button onClick={() => setPage("student")}>Student</button>
        <button onClick={() => setPage("teacher")}>Teacher</button> 
      </div>

      <Users type={page} />
    </>
  );
}

export default App

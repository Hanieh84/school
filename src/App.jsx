import { useState } from 'react'
import Students from '../Student/Student' 
import Teachers from '../Teacher/Teacher' 
import './App.css'


function App() {
  const [page, setPage] = useState("student")
  
 return (
    <>

<div className="menu-btns">
<button onClick={() => setPage("student")}>Student</button>
<button onClick={() => setPage("teacher")}>Teacher</button> 
</div>
  
{page === "student" ? <Students /> : <Teachers /> }
 </>
    
  );
}

export default App

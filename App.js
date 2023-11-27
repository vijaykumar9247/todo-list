import React,{useEffect,useState} from 'react'
import axios from "axios"
const App = () => {
  
  useEffect(()=>{
    axios.get('http://localhost:5000/gettask').then(
      arr=>setItem(arr.data)
    )

  })
  const[item,setItem]=useState([]);
  const[newtask,setNewtask]=useState("");
  const changeHandler=e=>{
    setNewtask(e.target.value)
  }
  const submit=e=>{
    e.preventDefault();
    axios.post('http://localhost:5000/addtask',{todo:newtask}).then(
      arr=>setItem(arr.data)
    )
      
    
  }
  const deleteHandler =id =>{
    axios.delete(`http://localhost:5000/delete/${id}`).then(
      arr=>setItem(arr.data))
    
    

  }
  return (
    <div>
   <center>
    <h3>todo list</h3>
    <form onSubmit={submit}>
      <input type="text" onChange={changeHandler} value={newtask}></input><br/>
      <input type="submit" value="submit"></input>
      </form>
     {item.map(task=><div key={task._id}>
      {task.todo}<button onClick={()=>deleteHandler(task._id)}>delete</button>
      </div>)}
      </center>
    </div>
  )
}

export default App

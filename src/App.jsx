import { useEffect, useState } from 'react'
import axios from 'axios';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  let[user, setUser] = useState()

  useEffect(()=>{
    let data = async () => {

        let response = await axios.get("https://jsonplaceholder.typicode.com/comments")
      
        setUser(response.data);
    } 
    data()
  },[])

  let [formData, setFormData] = useState({
    firstname : " ",
    lastname : " ",
    email : " ",

  })

  let handleForm = (e) => {
    let {name, value} = e.target
    setFormData({...formData,[name]:value})
  }
  
  let handleSubmit = () =>{
    console.log(formData);
  }


  return (
    <>
      <div className="main">

        {   user && user.length > 0
            ?
            user.map((item,index)=>(
            <div key= {index} className="item">
            <h1>ID: {item.id}</h1>
            <h1>name: {item.name}</h1>
            <h3>Username: {item.email}</h3>
            <h3>body: {item.body}</h3>
            </div>
          ))
          :
          
          <h1>Loading......</h1>
        }
      </div>

      <div>
        <input name='firstname' placeholder='First Name' onChange={handleForm} />
        <input name='lastname' placeholder='Last Name' onChange={handleForm} />
        <input name='email' placeholder='Email' onChange={handleForm} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  )
}

export default App

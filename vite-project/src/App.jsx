import React from 'react'
import axios from "axios"

const App = () => {
  const [data, setData]=React.useState("");
  const clicked= async()=>
  {
    const response=prompt("Enter your name");
   let res = await axios.get(`https://server-m9o9.onrender.com/${response}`)
  
   setData(res.data)
   console.log(res.data);
  }
  return (

    <>
    <div style={{height:"34cvh", width:"100vw", marginTop:"50px",backgroundColor:data}}>
     
         <button onClick={clicked}>clicked</button>
    </div>
    <div style={{height:"33vh", width:"100vw", marginTop:"50px",backgroundColor:data}}>
     
         <button onClick={clicked}>clicked</button>
    </div>
    <div style={{height:"33vh", width:"100vw", marginTop:"50px",backgroundColor:data}}>
     
         <button onClick={clicked}>clicked</button>
    </div>
    

    </>
  )
}

export default App
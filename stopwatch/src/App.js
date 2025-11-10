import React, { useEffect, useState } from 'react'

const App = () => {
  const [sec,setsec]=useState(0)
  const [start,setstart]=useState(false)

  useEffect(()=>{
    if(start){
  const intervalId=  setInterval(() => {
      setsec(sec+1)
    },1000);
    
      return (()=> clearInterval(intervalId) );
    
  }
  },[sec,start]) 
  const clickhand=()=>{
    setstart(true)
  }
  const mysec=()=>{

      if(Math.floor(sec/60)<10){
        if(sec%60<10){
        return(`0${Math.floor((sec%3600)/60)}:0${sec%60}`)
      }
      return(`0${Math.floor((sec%3600)/60)}:${sec%60}`) 
}
  

if(Math.floor((sec%3600)/60)<10){
      if(sec%60<10){
        return(`0${Math.floor((sec%3600)/60)}:0${sec%60}`)
      }
      return(`${Math.floor((sec%3600)/60)}:0${sec%60}`)
    }
      return(`${Math.floor((sec%3600)/60)}:${sec%60}`)

    
      
          
  }



  // const formattedSec = sec < 10 ? `0${sec}` : sec

  return (
    <div align="center">
      <h3>MY STOPWATCH</h3><br></br>
      <h1>{mysec()}</h1>
      <button onClick={clickhand}>start</button><button>stop</button><button>reset</button>
    </div>
  )
}

export default App
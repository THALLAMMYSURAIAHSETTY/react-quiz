import React,{useState} from "react";
import "./style.css";
import {Router,Route,Link,useNavigate} from 'react-router-dom'

export let Name="";

export default function App() {
  let navigate=useNavigate();

  let [name,Setname]=useState({UserName:""});

  function HandleInputs(e)
  {
    let key=e.target.name;
    Setname({...name,[key]:e.target.value})
  }

  function storename()
  {
    Name=name.UserName;
    navigate('/LoadingBeforeStarting')
    console.log(name)
  }

  return (
    <div>
      <h1>Welcome to Justest.IN</h1>
      <p>Please enter your full name</p>
      <input type="text" placeholder="Full Name" name="UserName" value={name.UserName} id="nameinpbox" onChange={HandleInputs}/>
      <button onClick={storename}>Enter</button>
      {/* {Timer? Result() : Questions()} */}
    </div>
  );
}


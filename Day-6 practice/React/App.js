
import React,{useState} from 'react'
import './App.css';

function Greet(props){
  return <h1>Good Morning , { props.msg }</h1>
}

function App() {
  const [message,setMessage] = useState('');
  return (
    <div className="App">
     
     <Greet msg={message}></Greet>
     <input type="text" onChange={(e) => setMessage(e.target.value)} />
    </div>
  );
}

export default App;


import './App.css';
import  SideBar from './Components/SideBar/SideBar'
import { useState } from 'react';
import Main from './Components/Main/Main';
function App() {
  const [side, setside] = useState(false);
  function sidehandler(){
    setside((prev)=>!prev);
  }
  return (
    <div className="App">
     <SideBar sidehandle = {sidehandler} side = {side}/>
     <Main sidehandle = {sidehandler} side = {side}/>
    </div>
  );
}

export default App;

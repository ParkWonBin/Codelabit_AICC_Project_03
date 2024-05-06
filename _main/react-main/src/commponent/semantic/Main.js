import { Routes, Route } from 'react-router-dom';
import './Main.css'

import About from '../routes/About'
import Board from '../routes/Board'
import MapData from '../routes/Map';
import Static from '../routes/Static_';
import Login from '../routes/Login_';

export const Main = ({props})=>{
  const {getUser, setUser} = props
  
  return <main id='main'>    
  <Routes>
    <Route path="/" element={<About/>} />
    <Route path="/map" element={<MapData/>} />
    <Route path="/static" element={<Static/>} />
    <Route path="/board" element={<Board/>} />
    <Route path="/login" element={<Login props={{getUser, setUser}}/>} />
  </Routes>
  </main>

}

export default Main;
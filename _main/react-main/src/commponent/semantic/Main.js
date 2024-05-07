import { Routes, Route } from 'react-router-dom';
import './Main.css'

import About from '../routes/About'
import MapData from '../routes/Map';
import Board from '../routes/Board_'
import BoardDetail from '../routes/Board_Detail';
import BoardCreate from '../routes/Board_Create';
import BoardUpdate from '../routes/Board_Update';
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
    <Route path="/board/create" element={<BoardCreate props={{getUser}}/>} />
    <Route path="/board/detail" element={<BoardDetail props={{getUser}}/>} />
    <Route path="/board/update" element={<BoardUpdate props={{getUser}}/>} />
    <Route path="/login" element={<Login props={{getUser, setUser}}/>} />
  </Routes>
  </main>

}

export default Main;
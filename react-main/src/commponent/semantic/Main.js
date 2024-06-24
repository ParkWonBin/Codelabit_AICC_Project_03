import React from 'react';
import './Main.css';
import About from '../routes/About';
import MapData from '../routes/Map';
import Board from '../routes/Board_';
import BoardDetail from '../routes/Board_Detail';
import BoardCreate from '../routes/Board_Create';
import BoardUpdate from '../routes/Board_Update';
import Static from '../routes/Static_';
import Login from '../routes/Login_';

export const Main = ({ getUser, setUser, activeMenu }) => {

  const renderComponent = () => {
    switch (activeMenu) {
      case '/':
        return <About />;
      case '/map':
        return <MapData />;
      case '/static':
        return <Static />;
      case '/board':
        return <Board />;
      case '/board/create':
        return <BoardCreate getUser={getUser} />;
      case '/board/detail':
        return <BoardDetail getUser={getUser} />;
      case '/board/update':
        return <BoardUpdate getUser={getUser} />;
      case '/login':
        return <Login getUser={getUser} setUser={setUser} />;
      default:
        return <About />;
    }
  };

  return (
    <main id='main'>
      {renderComponent()}
    </main>
  );
};

export default Main;

import React from 'react';
import './Navigation.css';

export const Navigation = ({ getNavData, setActiveMenu }) => {
  return (
    <nav id="navbar">
      <h3 onClick={() => setActiveMenu('about')}>{getNavData.title}</h3>
      <ul>
        {getNavData.data.map((item, index) => (
          <li key={index} onClick={() => setActiveMenu(item.url)}>
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

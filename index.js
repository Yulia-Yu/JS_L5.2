import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {useState } from "react";

const root = ReactDOM.createRoot(document.getElementById('root'));

  const NumberedList = ({ list }) => {

  const [clicks, setClicks] = useState({});

  const handleClick = (item) => {
    setClicks((prevState) => ({
      ...prevState,
      [item]: prevState[item] ? prevState[item] + 1 : 1,
    }));
  };
  return (
    <ul>
      {list.map((item) => (
        <li key={item} onClick={() => handleClick(item)}>
          {item} - {clicks[item] || 0}
        </li>
      ))}
    </ul>
  );
}
  
  const list = ["Алина", "Федор", "Иван", "Ольга"];

 root.render(<NumberedList list={list} />);
 
 
  

 
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import robot from '../resources/robot.png'
import './App.css';
import Form from "../form/Form";
import { contentList } from "../form/ContentList";

const App = () => {
 return (
    <div className="App">
    <div className="app-header">
        <p> Mars Rover </p>
    </div>
      <div className="robot-image">
        <img src={robot} className="robot" alt="robot" />
      </div>
    <div className="robot-table">
        <Form contents={contentList}/>
    </div>
    </div>
  )
}

export default App;

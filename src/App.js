import React from 'react';
import './App.css';
import Presentation from "./components/Presentation.js";
import RegisterAndLogIn from "./components/RegisterAndLogIn.js";

function App() {
  return (
    <div className="app">
      <Presentation></Presentation>
      {/* <RegisterAndLogIn></RegisterAndLogIn> */}
    </div>
  );
}

export default App;

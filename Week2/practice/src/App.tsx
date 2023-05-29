import React from 'react';
import logo from './logo.svg';
import './App.css';
import SignUpPage from './Components/SignUpPage';
import Nav from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      {/* <SignUpPage/> */}
      <Nav/>
      <AllRoutes/>
    </div>
  );
}

export default App;

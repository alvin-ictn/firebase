import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './config/firebase'
import {firebaseAuth} from './provider/AuthProvider'
import {Route, Switch} from 'react-router-dom'
import Signup from './component/Signup'

function App(){
  const {handleSignup} = useContext(firebaseAuth)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch>
        {/* route allows you to render by url path */}
        <Route exact path='/' component={Signup} />
      </Switch>
    </div>
    
  );

}

export default App;

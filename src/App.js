import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import PostDetail from './PostDetail';


function App() {
  return (
    <div >
      <Router>

      
          <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/about/:id">
            <PostDetail></PostDetail>

          </Route>
          
          <Route path="*">
            <h1>Page not found.</h1>

            
          </Route>
        </Switch>
        </Router>

     
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import CharactersListPage from './pages/CharactersListPage'

function App() {
  return (
    <div className="container text-center"> 
      <h1>Star Wars Characters</h1>
      
      <Switch> 

        <Route path="/"> 
        <CharactersListPage />
        </Route>

      </Switch>

   </div>
  );
}

export default App;

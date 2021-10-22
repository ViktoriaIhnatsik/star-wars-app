import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharactersListPage from './pages/CharactersListPage'

function App() {
  return (
    <div className="container"> 
      <h1>Star Wars characters</h1>
      
      <Switch> 

        <Route path="/"> 
        <CharactersListPage />
        </Route>

      </Switch>

   </div>
  );
}

export default App;

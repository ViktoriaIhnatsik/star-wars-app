import React, {useEffect, useState} from 'react'
import CharacterItem from '../components/CharacterItem'

export default function CharactersListPage() {
 const [charactersList, setCharactersList] = useState([]);

  useEffect( () => {
    const url = "https://swapi.dev/api/people/";
    fetch(url)
    .then(res => res.json())
    .then(data => setCharactersList(data.results))
  }, [] )

 return (
  <div className="container pt-5 pb-5">
   <h1>Characters List Page</h1>
   {!charactersList && <p>Loading...</p>}
   <div className="row">
    {charactersList && Object.entries(charactersList).map(characterItem => {
    const key = characterItem[0]
    const value = characterItem[1]
    return  <CharacterItem key={key} character={value}/> 
    })
  }
    </div>
  </div>
 )
}

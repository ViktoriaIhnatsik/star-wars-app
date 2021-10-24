import React, {useEffect, useState} from 'react'
import CharacterItem from '../components/CharacterItem'

export default function CharactersListPage() {
 const [charactersList, setCharactersList] = useState([]);
 const [searchInput, setSearchInput] = useState("");
 const [filteredResults, setFilteredResults] = useState([]);

  useEffect( () => {
    const url = "https://swapi.dev/api/people/";
    fetch(url)
    .then(res => res.json())
    .then(data => setCharactersList(data.results))
  }, [] )


  const searchItems = (e) => {
    setSearchInput(e.target.value);
    if (searchInput !== "") {
      const filteredData = charactersList.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(charactersList);
    }
  };
  

 return (
   <div className="container pt-5 pb-5">
     <h1>Characters List Page</h1>

     <input
       type="search"
       value={searchInput}
       placeholder="Search character"
       name="search"
       onChange={searchItems}
     />

     {!charactersList && <p>Loading...</p>}

     <div className="row">
       {searchInput.length > 1 
       ? filteredResults &&
           Object.entries(filteredResults).map((item) => {
              const key = item[0];
              const value = item[1];
             return <CharacterItem key={key} character={value} />;
           })
         : charactersList &&
           Object.entries(charactersList).map((characterItem) => {
             const key = characterItem[0];
             const value = characterItem[1];
             console.log(key);
             return <CharacterItem key={key} character={value} />;
           })}
     </div>
   </div>
 );
}

import React, { useEffect, useState } from "react";
import CharacterItem from "../components/CharacterItem";
import "../App.css";

export default function CharactersListPage() {
  const [charactersList, setCharactersList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  const fetchAllCharacters = async () => {
    setLoading(true);
    let allCharacters = [];
    let page = 1;
    let next = null;
    do {
      try {
        let url = `https://swapi.dev/api/people/?page=${page}`;
        await fetch(url)
          .then((res) => res.json())
          .then((data) => {
            next = data.next;
            data.results.forEach((character) => {
              allCharacters.push(character);
            });
          });
        page++;
      } catch (error) {
        console.log(error);
      }
    } while (next !== null);
    setCharactersList(allCharacters);
    setLoading(false);
  };

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
      <input
        className="searchInput"
        type="search"
        value={searchInput}
        placeholder="Search character"
        name="search"
        onChange={searchItems}
      />

      {loading && <p>Loading...</p>}

      <div className="row ">
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
              return <CharacterItem key={key} character={value} />;
            })}
      </div>
    </div>
  );
}

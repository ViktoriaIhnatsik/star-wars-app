import React, { useState} from 'react'

export default function CharacterItem({character}) {

  const [detailInfo, setDetailInfo] = useState(false);

  const handleOnClick = () => {
    detailInfo ? setDetailInfo(false) : setDetailInfo(true);
  };

 return (
   <div className="col-md-4 shadow p-3">
     {character.name}
     <div>
       <button className="btn btn-secondary btn-block" onClick={handleOnClick}>
         Detail info
       </button>
       {detailInfo && (
         <ul>
           <li>Height: {character.height} </li>
           <li>Mass: {character.mass}</li>
           <li>Hair Color: {character.hair_color}</li>
           <li>Skin Color: {character.skin_color} </li>
           <li>Eye Color: {character.eye_color}</li>
           <li>Birth year: {character.birth_year}</li>
           <li>Gender: {character.gender}</li>
         </ul>
       )}
     </div>
   </div>
 );
}

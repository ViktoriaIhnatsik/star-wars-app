import React, { useState} from 'react'

export default function CharacterItem({character}) {

  const [detailInfo, setDetailInfo] = useState(false);

  const handleOnClick = () => {
    detailInfo ? setDetailInfo(false) : setDetailInfo(true);
  };

 return (
   <div className="col-md-4  p-3 fs-3" >
     {character.name}
     <div>
       <button
         className="btn btn-outline-secondary btn-sm m-2"
         onClick={handleOnClick}
       >
         Detail info
       </button>
       {detailInfo && (
         <div className="fs-6 ">
             <p>Height: {character.height} </p>
             <p>Mass: {character.mass}</p>
             <p>Hair Color: {character.hair_color}</p>
             <p>Skin Color: {character.skin_color}</p>
             <p>Color: {character.eye_color}</p>
             <p>Birth year: {character.birth_year}</p>
             <p>Gender: {character.gender}</p>
         </div>
       )}
     </div>
   </div>
 );
}

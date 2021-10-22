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
         <table>
           <tr>
             <th>Height</th>
             <td>{character.height}</td>
           </tr>
           <tr>
             <th>Mass</th>
             <td>{character.mass}</td>
           </tr>
           <tr>
             <th>Hair Color</th>
             <td>{character.hair_color}</td>
           </tr>
           <tr>
             <th>Skin Color</th>
             <td>{character.skin_color}</td>
           </tr>
           <tr>
             <th>Eye Color</th>
             <td>{character.eye_color}</td>
           </tr>
           <tr>
             <th>Birth year</th>
             <td>{character.birth_year}</td>
           </tr>
           <tr>
             <th>Gender</th>
             <td>{character.gender}</td>
           </tr>
         </table>
       )}
     </div>
   </div>
 );
}

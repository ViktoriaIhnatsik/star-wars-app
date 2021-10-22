import React from 'react'

export default function CharacterItem({character}) {
 return (
   <div className="col-md-4 shadow p-3">
     {character.name}
     <div>
       <button className="btn btn-secondary btn-block">Detail info</button>
     </div>
   </div>
 );
}

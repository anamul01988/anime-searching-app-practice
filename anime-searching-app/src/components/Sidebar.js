import React from 'react'

function Sidebar({topAnime}) {
    return (
       <aside>
           <nav>
               <h3>Top Anine</h3>
               {topAnime.map(anime => ( <a href={anime.url}
               target="_blank"
               key={anime.mal_id}
               rel="noreferrer" >
                  {anime.title}
               </a>) )}
               {/* <a href="#"
               target="_blank"
               rel="noreferrer" >
                   Attack on Titan
               </a> */}
               {/* <a href="#"
               target="_blank"
               rel="noreferrer" >
                  one punch man
               </a>
               <a href="#"
               target="_blank"
               rel="noreferrer" >
                  sword art online
               </a> */}
           </nav>
       </aside>
    )
}

export default Sidebar

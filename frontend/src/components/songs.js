 import * as CONSTANTS from "./constants";
 import api from "../api/api-actions";
 import songs from "./songs";
 

 export default {
     displaySongs,
     setupSongLinks
 }

 function displaySongs(songs) {
     return `
    <section id='addSong'>
        <label><strong>Title: </strong></label>
        <input type='text' id='songTitle' placeholder='Enter song title here.' />
        <button id='btnAddSong'>Add Song</button>
    </section>

   
    <ol>
        ${songs.map(song => {
            return `
                <li>
                    <h4>
                        <span class="songTitle">${song.title}</span>
                        <input type='hidden' value='${song.albumId}' />
                    </h4>
                </li>
                
            `;
        }).join('')}
    </ol>
    
    `;
 }

 
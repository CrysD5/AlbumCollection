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
                        <span class="reviewerName">${song.title}</span>
                        <input type='hidden' value='${song.albumId}' />
                    </h4>
                </li>
                
            `;
        }).join('')}
    </ol>
    `;
 }

 function setupSongLinks() {
     let songLinks = document.querySelectorAll(".reviewrName");
     songLinks.forEach(songLink => {

         songLink.addEventListener("click", function (evt) {

             let songId = this.nextElementSibling.value;
             console.log("Song ID: " + songId);

             api.getRequest(CONSTANTS.SongAPIURL + songId, data => {
                 console.log(data);
                 CONSTANTS.content.innerHTML = songs.displaySongs(data);
             });
         });
     });
 }

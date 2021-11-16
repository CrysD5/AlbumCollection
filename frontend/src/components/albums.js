import * as CONSTANTS from "../components/constants";
import api from "../api/api-actions";

export default {
    displayAlbums,
    SetupAlbumDelete,
    SetupAddAlbum
}

//argument album
function displayAlbums(albums) {
    return `

 <ol>
    ${albums.map(album => {
        return `
            <h4>
                ${album.title}
            </h4>
        `;
    }).join('')}
</ol>
    `
}

//Create album code here - needs to be moved to individual artist page.
/*     
    <section id='addAlbum'>
         <label><strong>Name: </strong></label>
         <input type='text' id='albumTitle' placeholder='Enter the album title.' />
         <input type='text' id='albumSong' placeholder='Enter the first song on the album.' />
         <button id='btnAddAlbum'>Add Album</button>
    </section> 
*/

function SetupAlbumDelete() {
    //Steps:
    //1. Query selector all buttons with artist_delete class
    //2. Use foreach loop to add eventlistener to all buttons
    //3. Use API to run up a delete function to the server.
}

function SetupAddAlbum() {
    const btnAddAlbum = document.getElementById("btnAddAlbum");
    btnAddAlbum.addEventListener("click", function () {
        console.log("Add album button hooked up!");
        const newAlbum = {
            Title: document.getElementById("albumTitle").value
        }

        api.postRequest(CONSTANTS.AlbumAPIURL, newAlbum, data => {
            CONSTANTS.title.innerText = "Album Details";
            CONSTANTS.tabTitle.innerText = "Album Details";
            CONSTANTS.content.innerHTML = `
                Album Details page goes here
            `;

        });
    });
}
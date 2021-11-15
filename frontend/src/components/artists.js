import * as CONSTANTS from "../components/constants";
import api from "../api/api-actions";

export default {
    displayArtists,
    SetupDeleteButton,
    SetupAddArtist
}

export function displayArtists(artists) {
    return `
    <section id='addArtist'>
        <label><strong>Name: </strong></label>
        <input type='text' id='artistName' placeholder='Enter the artist's name.' />
        <button id='btnAddArtist'>Add Artist</button>
    </section>

   
    <ol>
        ${artists.map(artist => {
            return `
                <li>
                    <h4>
                        ${artist.name}
                    </h4>
                </li>
            `;
        }).join('')}
    </ol>
    `;
}

function SetupDeleteButton() {
    //Steps:
    //1. Query selector all buttons with artist_delete class
    //2. Use foreach loop to add eventlistener to all buttons
    //3. Use API to run up a delete function to the server.
}

//DON'T FORGET TO ALSO CHANGE SETUPADDALBUM AS WELL IF THIS API CALL DOESN'T WORK LOL

function SetupAddArtist() {
    const btnAddArtist = document.getElementById("btnAddArtist");
    btnAddArtist.addEventListener("click", function(){
        console.log("Add Artist button hooked up!");
        const newArtist = {
            Name: document.getElementById("artistName").value
        }

        api.postRequest(CONSTANTS.ArtistAPIURL, newArtist, data => {
            CONSTANTS.title.innerText = "Artist Details";
            CONSTANTS.tabTitle.innerText = "Artist Details";
            //Display individual artist function is called here.
            //Setup edit button function also goes here.
            CONSTANTS.content.innerHTML = `
                Artist Details page goes here!
            `;
        });
    });

}
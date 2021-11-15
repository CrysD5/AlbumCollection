import * as CONSTANTS from "../components/constants";
import api from "../api/api-actions";

export default {
    displayArtists,
    SetupDeleteButton,
    SetupAddArtist
}

/*artist data goes here*/
export function displayArtists(artists) {
    return `
    <section id='addArtist'>
        <--! ADD ARTIST GOES HERE !-->
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

export function SetupDeleteButton() {
    //Steps:
    //1. Query selector all buttons with artist_delete class
    //2. Use foreach loop to add eventlistener to all buttons
    //3. Use API to run up a delete function to the server.
}

export function SetupAddArtist() {
    const btnAddArtist = document.getElementById("btnAddArtist");
    btnAddArtist.addEventListener("click", function(){
        console.log("Add Artist button hooked up!");
    })

}
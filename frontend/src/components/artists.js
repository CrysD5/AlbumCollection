import * as CONSTANTS from "../components/constants";
import api from "../api/api-actions";
import artistDetails from "../components/artistDetails";

export default {
    displayArtists,
    SetupDeleteButton,
    SetupAddArtist,
    setupArtistLinks
}

export function displayArtists(artists) {
    return `
    <section id='addArtist'>
        <label><strong>Name: </strong></label>
        <input type='text' id='artistName' placeholder='Enter the artist name.' />
        <input type='text' id='artistLabel' placeholder='Enter the artist record label.' />
        <button id='btnAddArtist'>Add Artist</button>
    </section>

   
    <ol>
        ${artists.map(artist => {
            return `
                <li>
                    <h4>
                        <span class="artistName">${artist.name}</span>
                        <input type='hidden' value='${artist.id}' />
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

function setupArtistLinks() {
    let artistLinks = document.querySelectorAll(".artistName");
    artistLinks.forEach(artistLink => {

        artistLink.addEventListener("click", function(evt){

            let artistId = this.nextElementSibling.value;
            console.log("Artist ID:" + artistId);

            //API Call
            api.getRequest(CONSTANTS.ArtistAPIURL + artistId, data => {
                console.log(data);
                CONSTANTS.content.innerHTML = artistDetails.artistDetails(data);
                artistDetails.SetupAddAlbum();
                artistDetails.SetupEditButton();
            });
        });
    });
}

function SetupAddArtist() {
    const btnAddArtist = document.getElementById("btnAddArtist");
    btnAddArtist.addEventListener("click", function(){
        const newArtist = {
            Name: document.getElementById("artistName").value,
            ArtistLabel: document.getElementById("artistLabel").value
        }

        api.postRequest(CONSTANTS.ArtistAPIURL, newArtist, data => {
            CONSTANTS.title.innerText = "Artist Details";
            CONSTANTS.tabTitle.innerText = "Artist Details";
            //Display individual artist function is called here.
            //Setup edit button function also goes here.
            CONSTANTS.content.innerHTML = artistDetails.artistDetails(data);
            artistDetails.SetupEditButton();
        });
    });

}
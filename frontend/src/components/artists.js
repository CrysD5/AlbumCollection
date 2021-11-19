import * as CONSTANTS from "../components/constants";
import api from "../api/api-actions";
import artistDetails from "../components/artistDetails";

export default {
    displayArtists,
    SetupArtistDeleteButton,
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
                        <button id="${artist.id}" class="artistDelete">delete</button>
                    </h4>
                </li>
                
            `;
        }).join('')}
    </ol>
    `;
}



function SetupArtistDeleteButton() {

    let artistDeleteButtons = document.querySelectorAll(".artistDelete");

    artistDeleteButtons.forEach(artistDeleteButton => {
        artistDeleteButton.addEventListener('click', function (event) {
            console.log("delete button clicked");
            let artistId = event.target.id;


            api.deleteRequest(CONSTANTS.ArtistAPIURL, artistId, data => {
                CONSTANTS.content.innerHTML = displayArtists(data);
                SetupAddArtist();
                setupArtistLinks();
            });
        });
    });
}

function setupArtistLinks() {
    let artistLinks = document.querySelectorAll(".artistName");
    artistLinks.forEach(artistLink => {

        artistLink.addEventListener("click", function (evt) {

            let artistId = this.nextElementSibling.id;
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
    btnAddArtist.addEventListener("click", function () {
        const newArtist = {
            Name: document.getElementById("artistName").value,
            ArtistLabel: document.getElementById("artistLabel").value
        }

        api.postRequest(CONSTANTS.ArtistAPIURL, newArtist, data => {
            CONSTANTS.content.innerHTML = artistDetails.artistDetails(data);
            artistDetails.SetupEditButton();
            artistDetails.setupNavToAlbum();
        });
    });

}
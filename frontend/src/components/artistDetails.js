import albumDetails from "./albumDetails";
import api from "../api/api-actions";
import * as CONSTANTS from "../components/constants";
import artists, { displayArtists } from "./artists";

export default {
    artistDetails,
    SetupAddAlbum,
    SetupEditButton
}

function artistDetails(artist) {

    console.log(artist);

    if (artist.albums == null) {
        artist.albums = [];
    }

    return `
       <h2>Artist Details</h2>
       <button id="btnEditArtist">Edit Artist</button>
       <h4>Artist Name:</h4> <span id="artistName">${artist.name}</span>
       <h4>Main Label:</h4> ${artist.artistLabel}
       <h4>Albums:</h4>
            <ol>
                ${artist.albums.map(album => {
                    return `
                        <li>${album.title}</li>
                    `
                }).join('')}
            </ol>
        <section id='addAlbum'>
            <label><strong>Name: </strong></label>
            <input type='text' id='albumTitle' placeholder='Enter the album title.' />
            <input type='text' id='albumSong' placeholder='Enter the first song on the album.' />
            <input type='text' id='albumRecordLabel' placeholder='Enter the record label of the album.' />
            <input type='text' id='albumReleaseYear' placeholder='Enter the album release year.' />
            <input type='text' id='albumGenre' placeholder='Enter the genre of the album.' />
            <input type='hidden' value='${artist.id}' id='artist_id' />
            <button id='btnAddAlbum'>Add Album</button>
    </section> 
        `;
}

function SetupAddAlbum() {
    const btnAddAlbum = document.getElementById("btnAddAlbum");
     btnAddAlbum.addEventListener("click", function () {
         console.log("Add album button hooked up!");

         //need analog to getelementbyid?
         const newAlbum = {
             Title: document.getElementById("albumTitle").value,
             ArtistId: document.getElementById("artistId").value,
             RecordLabel: document.getElementById("albumRecordLabel").value,
             ReleaseYear: document.getElementById("albumReleaseYear").value,
             Genre: document.getElementById("albumGenre").value,
         }

         api.postRequest(CONSTANTS.AlbumAPIURL, newAlbum, data => {
             CONSTANTS.title.innerText = "Album Details";
             CONSTANTS.tabTitle.innerText = "Album Details";
             CONSTANTS.content.innerHTML = albumDetails.albumDetails(data);
             albumDetails.addReview();

         });
     });
}

//TO EDIT ARTIST
//1. Function that sets up the HTML we will need. (EditArtist)
//2. Function that does API call and sets up button. (SetupSaveButton)
//3. Function that ties the above two together. (SetupEditButton)

function EditArtist(artist) {
    CONSTANTS.title.innerText = "Edit Artist";
    CONSTANTS.tabTitle.innerText = "Edit Artist";

    return `
        <section id="editArtistForm">
            <input type='hidden' value='${artist.id}' id='artist_id' />
            <label>Artist Name:</label> <input type='text' value='${artist.name}' id='artistName' placeholder='Enter the artist name.' />
            <label>Artist Label:</label><input type='text' value='${artist.artistLabel}' id='artistLabel' placeholder='Enter the artist record label.' />

        </section>
        <button id="btnSaveArtist">Save Changes</button>
    `;
    
    //add the option to delete albums to this page as well? 
}

function SetupArtistSaveButton() {
    let btnSave = document.getElementById("btnSaveArtist");
    btnSave.addEventListener("click", function(){
        let artistId = document.getElementById("artist_id").value;
        let artistName = document.getElementById("artistName").value;
        let artistLabel = document.getElementById("artistLabel").value;

        const editedArtist = {
            Id: artistId,
            Name: artistName,
            ArtistLabel: artistLabel
        }

        api.putRequest(CONSTANTS.ArtistAPIURL, artistId, editedArtist, data => {
            CONSTANTS.content.innerHTML = artistDetails(data);
            SetupAddAlbum();
            SetupEditButton();
        });
    });
}

function SetupEditButton() {
    let artistId = document.getElementById("artist_id").value;
    let editBtn = document.getElementById("btnEditArtist");
    editBtn.addEventListener("click", function(){
        api.getRequest(CONSTANTS.ArtistAPIURL + artistId, artist => {
            CONSTANTS.content.innerHTML = EditArtist(artist);
            SetupArtistSaveButton();
        });
    });
}
import * as CONSTANTS from "../components/constants";
import api from "../api/api-actions";
import albumDetails from "./albumDetails";

export default {
    displayAlbums,
    setupAlbumDeleteButton,
    setupAlbumLinks
}


export function displayAlbums(albums) {
    return `
 <ol>
    ${albums.map(album => {
        return `
        <li>
            <h4>
            <span class = "albumDetails">
                ${album.title}
            </span>

            <input type='hidden' value='${album.id}' />
            <button id="${album.id}" class="albumDelete">delete</button>
            </h4>
        </li>
        `;
    }).join('')}
</ol>
    `
}

export function setupAlbumLinks() {
    let albumLinks = document.querySelectorAll(".albumDetails");
    albumLinks.forEach(albumLink => {

        albumLink.addEventListener("click", function (evt) {

            let albumId = this.nextElementSibling.value;
            console.log("Album Id:" + albumId);

            //API Call
            api.getRequest(CONSTANTS.AlbumAPIURL + albumId, data => {
                CONSTANTS.content.innerHTML = albumDetails.albumDetails(data);
                albumDetails.addReview();
                //albumDetails.addSong();
                albumDetails.setupSongLinks();
                albumDetails.SetupAlbumEditButton();


                //also our setupEditBtn function goes here as well! :)
            });
        });
    });
}

export function setupAlbumDeleteButton() {
    let albumDeleteButtons = document.querySelectorAll(".albumDelete");

    albumDeleteButtons.forEach(albumDeleteButton => {
        albumDeleteButton.addEventListener('click', function (event) {
            console.log("delete button clicked");
            let albumId = event.target.id;


            api.deleteRequest(CONSTANTS.AlbumAPIURL, albumId, data => {
                CONSTANTS.content.innerHTML = displayAlbums(data);
                setupAlbumDeleteButton();
                setupAlbumLinks();
            });
        });
    });
}
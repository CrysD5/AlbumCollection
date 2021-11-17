import * as CONSTANTS from "../components/constants";
import api from "../api/api-actions";
import albumDetails from "./albumDetails";

export default {
    displayAlbums,
    setupAlbumDeleteButton,
    setupAlbumLinks,
    setupAddAlbumButton
}


export function displayAlbums(albums) {
    return `
    <section class='addAlbum'>
    <label><strong>Name:</strong></label>
    <input type='text' id='addAlbumName' placeholder='Enter album name' />
    <button id='btnAddAlbum'>Add Album</button>
    </section>
 <ol>
    ${albums.map(album => {
        return `
        <li>
            <h4>
            <span class = "albumDetails">
                ${album.title}
            </span>
            <input type='hidden' value='${album.id}' />
            <button id="${album.id}" class="albumDelete">
            <i class="fas fa-trash-alt"></i></button>
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

        albumLink.addEventListener("click", function(evt){

            let albumId = this.nextElementSibling.value;
            console.log("Album Id:" + albumId);

            //API Call
            api.getRequest(CONSTANTS.AlbumAPIURL + albumId, data => {
                console.log(data);
                CONSTANTS.content.innerHTML = albumDetails.AlbumDetails(data);
                 
                //also our setupEditBtn function goes here as well! :)
            });
        });
    });
}

export function setupAlbumDeleteButton(){
    let albumDeleteButtons = document.querySelectorAll(".albumDelete");

    albumDeleteButtons.forEach(element => {
        element.addEventListener('click', function(){
            console.log("delete button clicked");
            let id = element.id;
            

            api.deleteRequest(CONSTANTS.AlbumAPIURL, id, data => {
                CONSTANTS.content.innerHTML = displayAlbums(data);
                setupAlbumDeleteButton();
                setupAlbumLinks();
            });
        });
    });
}

export function setupAddAlbumButton(){
    const btnAddAlbum = document.getElementById("btnAddAlbum");
    btnAddAlbum.addEventListener("click", function (){
        console.log("Add album button hooked up!");
        const newAlbum = {
            title: document.getElementById("addAlbumName").value
        }

        api.postRequest(CONSTANTS.AlbumAPIURL, newAlbum, data => {
            CONSTANTS.title.innerText = "Album Details";
            CONSTANTS.content.innerHTML = albumDetails.AlbumDetails(data);
        });
    });
}

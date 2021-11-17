 import * as CONSTANTS from "./constants";
 import api from "../api/api-actions";
 import artistDetails from "./artistDetails";
 import albumDetails from "./albumDetails";
 import albums from "./albums";

 export default {
     ArtistDetails,
     setupNavToAlbum

 }

 function ArtistDetails(artist) {
     return ` 
    <h1>Artist Details</h1>
    <h4>Artist: ${artist.name}</h4>
    <p></p>

    <ul>
    <li> Artist Label: ${artist.artistLabel}</li>
    <li> Artist Albums: ${artist.albums.map(albums => {
                return `
                    <li><span class="navToAlbum">${albums.title}</span>         
                    <input type='hidden' value= '${albums.id}'/></li>
      `


            }).join('')}

        </ul>       
    
    `
 }

 function setupNavToAlbum() {
     let navToAlbum = document.querySelectorAll(".navToAlbum");
     console.log(navToAlbum);
     navToAlbum.forEach(albumLink => {

         albumLink.addEventListener("click", function (evt) {

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
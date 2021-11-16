import * as CONSTANTS from "../components/constants";
import Artists from "../components/artists";
import Albums from "../components/albums";
import api from "../api/api-actions";

export default {
    setUpNavBar,
    setupHome,
    setupArtists,
    setupAlbums
}

export function setUpNavBar(){
    return `
    <ul>
        <li id="navHome">Home</li>
        <li id="navArtists">Artists</li>
        <li id="navAlbums">Albums</li>
    </ul>
    `;
}

function setupHome(){
    const btnHome = document.getElementById("navHome");
    btnHome.addEventListener("click", function(){
        CONSTANTS.tabTitle.innerText="Home";
        CONSTANTS.title.innerText ="Home";
        CONSTANTS.content.innerHTML =`
            <p>Welcome back Home!</p>
        `;
    });
}

function setupArtists() {
    const btnArtists = document.getElementById("navArtists");
    btnArtists.addEventListener("click", function() {  
        console.log("Artists clicked!");
        api.getRequest(CONSTANTS.ArtistAPIURL, data => {
            CONSTANTS.title.innerText = "All Artists";
            CONSTANTS.tabTitle.innerText = "All Artists";
            CONSTANTS.content.innerHTML = Artists.displayArtists(data);
            Artists.setupArtistLinks();
            Artists.SetupAddArtist();
        })
    })
}

function setupAlbums() {
    const btnAlbums = document.getElementById("navAlbums");
    btnAlbums.addEventListener("click", function(){
        console.log("Album Display button hooked up!");
        api.getRequest(CONSTANTS.AlbumAPIURL, data => {
            CONSTANTS.title.innerText = "All Albums";
            CONSTANTS.tabTitle.innerText = "Albums";
            CONSTANTS.content.innerHTML = Albums.displayAlbums(data);
            Albums.SetupAddAlbum();
        })
    })
}
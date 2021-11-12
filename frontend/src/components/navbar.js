import * as CONSTANTS from "../components/constants";
import Artists from "../components/artists";
import Albums from "../components/albums";

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
    CONSTANTS.tabTitle.innerText = "All Artists";
    btnArtists.addEventListener("click", function() {
        //API CALL GOES HERE
        Artists.displayArtists();
        Artists.SetupAddArtist();
    })
}

function setupAlbums() {
    const btnAlbums = document.getElementById("navAlbums");
    btnAlbums.addEventListener("click", function(){
        console.log("Album Display button hooked up!");
        //API CALL GOES HERE
        Albums.displayAlbums();
        Albums.SetupAddAlbum();
    })
}
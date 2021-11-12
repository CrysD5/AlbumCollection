import H from "../components/navbar";
import * as CONSTANTS from "../components/constants";

const navbar = document.getElementById("navbar");

export default() => {
    setupHome(); 
    setupNavbar();
}

function setupNavbar() {
    navbar.innerHTML = H.setUpNavBar();
    H.setupHome();
    H.setupArtists();
    H.setupAlbums();
}

function setupHome(){
    let appDiv = document.getElementById("app");
    appDiv.innerHTML = "Hello World";
	
	
	
}
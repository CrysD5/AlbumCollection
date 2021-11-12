import * as CONSTANTS from "../components/constants";

export default {
    displayAlbums,
    SetupAddAlbum,
    SetupAddAlbum
}

//argument album
function displayAlbums() {
    CONSTANTS.title.innerText = "All Albums";
    CONSTANTS.tabTitle.innerText = "All Albums";
    //API Call goes here
    CONSTANTS.content.innerHTML = `
    <section id='addAlbum'>
    <--! ADD ALBUM GOES HERE !-->
    <label><strong>Name: </strong></label>
    <input type='text' id='albumTitle' placeholder='Enter the album's title.' />
    <input type='text' id='albumSong' placeholder='Enter the first song on the album.' />
    <button id='btnAddAlbum'>Add Album</button>
</section>


<ol>
    //album.map(album => {
        list here
    });
</ol>
    `
}

function SetupAlbumDelete(){
    //Steps:
    //1. Query selector all buttons with artist_delete class
    //2. Use foreach loop to add eventlistener to all buttons
    //3. Use API to run up a delete function to the server.
}

function SetupAddAlbum() {
    const btnAddAlbum = document.getElementById("btnAddAlbum");
    btnAddAlbum.addEventListener("click", function(){
        console.log("Add album button hooked up!");
    })
}
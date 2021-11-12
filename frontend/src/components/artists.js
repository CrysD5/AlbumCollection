import * as CONSTANTS from "../components/constants";

export default {
    displayArtists,
    SetupDeleteButton,
    SetupAddArtist
}

/*artist data goes here*/
export function displayArtists() {
    CONSTANTS.title.innerText = "All Artists";
    //API INFO goes here
    CONSTANTS.content.innerHTML = `
    <section id='addArtist'>
        <--! ADD ARTIST GOES HERE !-->
        <label><strong>Name: </strong></label>
        <input type='text' id='artistName' placeholder='Enter the artist's name.' />
        <button id='btnAddArtist'>Add Artist</button>
    </section>

   
    <ol>
        //artists.map(artist => {
            list here
        });
    </ol>
    `;
    //        ${sldkfjlskdjglkjl} <= correct format
    //returns html to display all artists

    //return artist
}

export function SetupDeleteButton() {
    //Steps:
    //1. Query selector all buttons with artist_delete class
    //2. Use foreach loop to add eventlistener to all buttons
    //3. Use API to run up a delete function to the server.
}

export function SetupAddArtist() {
    const btnAddArtist = document.getElementById("btnAddArtist");
    btnAddArtist.addEventListener("click", function(){
        console.log("Add Artist button hooked up!");
    })

}
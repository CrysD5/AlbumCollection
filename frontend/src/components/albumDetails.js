import api from "../api/api-actions";
import * as CONSTANTS from "../components/constants";

export default {
    albumDetails,
    addReview,
    setupSongLinks,
    //addSong,
    SetupAlbumEditButton
}

//Cannot edit albums: albums.artist is undefined (this may be a backend issue - 
//Make sure our controller is set up correctly.)

//Add album button completely broken.

//Add songs button works fine.

//Add reviews works fine.

function albumDetails(album) {

    if(album.songs == null){
        album.songs = [];
    }

    if(album.reviews == null){
        album.reviews = [];
    }

    // <h4> Songs: </h4>
    //     <section id='addSong'>
    //     <label><strong>Title: </strong></label>
    //     <input type='text' id='songTitle' placeholder='Enter song title here.' />
    //     <button id='btnAddSong'>Add Song</button>
    // </section>
    //carlos said remove for now cuz its a stretch task and to focus on required

    return ` 
        <h1>Album Details</h1>
        <h2>Album Title: ${album.title}</h2>
        <h3>Artist: ${album.artist.name}</h3>
        <p>Record Label: ${album.recordLabel}</p>
        <p>Release Year:  ${album.releaseYear}</p>
        <p>Genre: ${album.genre}</p> 
        <button id="btnEditAlbum">Edit</button>      
    <ol>
        ${album.songs.map(song => {
            return `
                <li>
                    <h4>
                        <span class="songTitle">${song.title}</span>
                        <input type='hidden' value='${song.albumId}' />
                    </h4>
                </li>
                
            `;
        }).join('')}
    </ol>
        <h1>Reviews:</h1> ${album.reviews.map(review => {
            return `
                <ul>
                    <li>${review.reviewerName}
                        <ul>
                            <li>${review.content}</li>
                            <li>${review.reviewDate.ToLocalDateString}</li>
                        </ul>
                    </li>
                </ul>          
            `;
        }).join('')}

        <label>Reviewer Name:</label><input id="reviewerName" placeholder="Enter your name." />
        <label>Content:</label><input id="reviewContent" placeholder="Enter your review here." />
        <input type=hidden value="${album.id}" id="album_id" />
        <button id="btnAddReview">Add a review!</button>
    `;
}

function setupSongLinks() {
    let songLinks = document.querySelectorAll(".songTitle");
    songLinks.forEach(songLink => {

        songLink.addEventListener("click", function (evt) {

            let songId = this.nextElementSibling.value;
            console.log("Song ID: " + songId);

            api.getRequest(CONSTANTS.SongAPIURL + songId, data => {
                console.log(data);
                CONSTANTS.content.innerHTML = songs.displaySongs(data);

            });
        });
    });
}

function addSong() {
    const btnAddSong = document.getElementById("btnAddSong");
    btnAddSong.addEventListener("click", function() {
        console.log("Add songs button clicked!");
        const newSong = {
            Title: document.getElementById("songTitle").value,
            AlbumId: document.getElementById("album_id").value
        }

        api.postRequest(CONSTANTS.SongAPIURL, newSong, album => {
            CONSTANTS.title.innerText = "Album Details";
            CONSTANTS.tabTitle.innerText = "Album Details";
            CONSTANTS.content.innerHTML = albumDetails(album);
            addReview();
            setupSongLinks();
            //addSong();
            SetupAlbumEditButton();
        });
    });
}


//Create review needs:
//>>1. HTML representing the form to create a review. 
//2. A function to hook up the button to the form and to do an api call (post).
//3. A function to join these two items.

//Review has
//ReviewerName, Content, AlbumId, DateTime (automatic)

function addReview() {
    const btnAddReview = document.getElementById("btnAddReview");

    btnAddReview.addEventListener("click", function () {
        const newReview = {
            ReviewerName: document.getElementById("reviewerName").value,
            Content: document.getElementById("reviewContent").value,
            AlbumId: document.getElementById("album_id").value,
        }

        api.postRequest(CONSTANTS.ReviewAPIURL, newReview, album => {
            CONSTANTS.title.innerText = "Album Details";
            CONSTANTS.tabTitle.innerText = "Album Details";
            CONSTANTS.content.innerHTML = albumDetails(album);
            addReview();
            setupSongLinks();
            //addSong();
            SetupAlbumEditButton();
        });
    });
}

function EditAlbum(album) {
    CONSTANTS.title.innerText = "Edit Album";
    CONSTANTS.tabTitle.innerText = "Edit Album";
    console.log('in edit album');
    console.log(album);
    return `
        <section id="editAlbumForm">
            <input type='hidden' value='${album.id}' id='album_id' />
            <input type='hidden' value='${album.artistId}' id='artist_id' />
            <label><strong>Title: </strong></label><input type='text' id='albumTitle' value='${album.title}' placeholder='Enter the album title.' />
            <label><strong>Record Label: </strong></label><input type='text' value='${album.recordLabel}' id='albumRecordLabel' placeholder='Enter the record label of the album.' />
            <label><strong>Release Year: </strong></label><input type='text' id='albumReleaseYear' value='${album.releaseYear}' placeholder='Enter the album release year.' />
            
            <label><strong>Genre: </strong></label><input type='text' id='albumGenre' value='${album.genre}' placeholder='Enter the genre of the album.' />

        </section>
        <button id="btnSaveAlbum">Save Changes</button>
    `;
    
    //add the option to delete albums to this page as well? 
}

function SetupAlbumSaveButton() {
    let btnSave = document.getElementById("btnSaveAlbum");
    btnSave.addEventListener("click", function(){
        let albumId = document.getElementById("album_id").value;
        let artistId = document.getElementById("artist_id").value;

        const editedAlbum = {
            Title: document.getElementById("albumTitle").value,
            Id: albumId,
            ArtistId: artistId,
            RecordLabel: document.getElementById("albumRecordLabel").value,
            ReleaseYear: document.getElementById("albumReleaseYear").value,
            Genre: document.getElementById("albumGenre").value
        }

        api.putRequest(CONSTANTS.AlbumAPIURL, albumId, editedAlbum, album => {
            console.log("Album.artistId: " + album.artistId);
            console.log("AlbumID: " + album.id);
            CONSTANTS.content.innerHTML = albumDetails(album);
            console.log("Album.artistID: " + album.artistId);
            console.log("AlbumId: " + album.id);
            addReview();
            setupSongLinks();
            //addSong();
            SetupAlbumEditButton();
        });
    });
}

function SetupAlbumEditButton() {
    let albumId = document.getElementById("album_id").value;
    let editBtn = document.getElementById("btnEditAlbum");
    editBtn.addEventListener("click", function(){
        api.getRequest(CONSTANTS.AlbumAPIURL + albumId, album => {
            console.log("retrieved album" + album);
            CONSTANTS.content.innerHTML = EditAlbum(album);
            SetupAlbumSaveButton();
        });
    });
}
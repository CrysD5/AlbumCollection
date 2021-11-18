import api from "../api/api-actions";
import * as CONSTANTS from "../components/constants";

export default {
    albumDetails,
    addReview,
    setupSongLinks
}

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
                            <li>${review.reviewDate}</li>
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


//Create review needs:
//>>1. HTML representing the form to create a review. 
//2. A function to hook up the button to the form and to do an api call (post).
//3. A function to join these two items.

//Review has
//ReviewerName, Content, AlbumId, DateTime (automatic)

function addReview() {
    const btnAddReview = document.getElementById("btnAddReview");
    var reviewDate = Date.now()

    btnAddReview.addEventListener("click", function () {
        const newReview = {
            ReviewerName: document.getElementById("reviewerName").value,
            Content: document.getElementById("reviewContent").value,
            AlbumId: document.getElementById("album_id").value,
            //ReviewDate: reviewDate
        }

        api.postRequest(CONSTANTS.ReviewAPIURL, newReview, data => {
            //Review Details page here!
            return `
                Review details page goes here!;
            `
        });
    });
}
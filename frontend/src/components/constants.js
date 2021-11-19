import apiActions from "../api/api-actions";

export const title = document.getElementById("pageTitle");
export const content = document.getElementById("pageContent");
export const tabTitle = document.getElementById("tabTitle");

export const ArtistAPIURL = 'https://localhost:44313/api/artist/';
export const AlbumAPIURL = 'https://localhost:44313/api/album/';
export const ReviewAPIURL = 'https://localhost:44313/api/review/';
export const SongAPIURL = "https://localhost:44313/api/song";

export const GetAllArtists = function(){
    let ddlArtists = document.getElementById("artistList");
    if(ddlArtists != undefined){
        apiActions.getRequest(ArtistAPIURL, artists =>{
            artists.forEach(artist =>{
                let option = document.createElement('option');
                option.value = artist.id;
                option.text = artist.name;
                ddlArtists.appendChild(option);
            });
        });
    }
    
}

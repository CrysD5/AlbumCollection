 import * as CONSTANTS from "./constants";
 import api from "../api/api-actions";
 import artists from "./artists";

 export default {
     ArtistDetails
 }

 function ArtistDetails(artist) 
 {
     return ` 
    <h1>Artist Details</h1>
    <h4>Artist: ${artist.name}</h4>
    <p></p>

    <ul>
    <li> Artist Label: ${artist.artistLabel}</li>
    <li> Artist Albums: ${artist.albums.map(albums => {
                return `
                    <li>
                        ${albums.title}
                    </li>                `


            }).join('')
        }

        </ul>       
    
   
    <ol>
    </ol>
    `
 }
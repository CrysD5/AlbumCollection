import * as CONSTANTS from "./constants";
import api from "../api/api-actions";
import albums from "./albums";

export default {
    AlbumDetails
}

function AlbumDetails(album)
{
return` 
<h1>Album Details</h1>
<h4>Album Title: ${album.title}</h4>
<p>Artist: ${album.artist.name}</p>
<p>Record Label: ${album.recordLabel}</p>
<p>Release Year:  ${album.releaseYear}</p>
<p>Genre: ${album.genre}</p>
<ol>

</ol>

`

}


// public int Id { get; set; }
// public string Title { get; set; }
// public int ArtistId { get; set; }
// public string RecordLabel { get; set; }
// public virtual List<Review> Reviews { get; set; }
// public virtual List<Song> Songs { get; set; }
// public virtual Artist Artist { get; set; }
// public int ReleaseYear { get; set; }
// public string Genre { get; set; }
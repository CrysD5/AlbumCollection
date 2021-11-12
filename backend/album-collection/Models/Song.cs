using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Song
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int AlbumId { get; set; }
        public virtual Album Album { get; set; }
        //public int ArtistId { get; set; }  // should we include ArtistId too or is it overkill? If songs feat. dif artists it would work better
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Album
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ArtistId { get; set; }
        public string RecordLabel { get; set; }
        public virtual List<Review> Reviews { get; set; }
        public virtual List<Song> Songs { get; set; }
        public virtual Artist Artist { get; set; }
        public int ReleaseYear { get; set; }
        public string Genre { get; set; }


    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Models
{
    public class Artist
    {
        public int Id { get; set; }
        public string Name { get; set; }        
        public virtual List<Album> Albums { get; set; }
        public string ArtistLabel { get; set; }
    }
}

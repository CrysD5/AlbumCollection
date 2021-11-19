using album_collection.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace album_collection.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SongsController : ControllerBase
    {
        private readonly AlbumCollectionContext _db;

        public SongsController(AlbumCollectionContext db)
        {
            _db = db;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Song>> Get()
        {
            return _db.Songs.ToList();
        }

        
        [HttpPost]
        public ActionResult<Album> Post([FromBody]Song song)
        {
            _db.Songs.Add(song);
            _db.SaveChanges();

            song.Album = _db.Albums.Find(song.AlbumId);
            Album album = song.Album;

            return album;
        }

        [HttpPut("{id}")]
        public ActionResult<Song> Put(int id, [FromBody]Song song)
        {
            if (song.Id == id)
            {
                _db.Songs.Update(song);
                _db.SaveChanges();
            }

            return song;
        }

        [HttpDelete ("{id}")]
        public ActionResult<List<Artist>> Delete(int id)
        {
            var artist = _db.Artists.Find(id);
            _db.Artists.Remove(artist);
            _db.SaveChanges();
            return _db.Artists.ToList();
        }
    }
}

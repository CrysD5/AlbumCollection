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
    public class AlbumController : ControllerBase
    {
        private readonly AlbumCollectionContext _db;

        public AlbumController(AlbumCollectionContext db)
        {
            _db = db;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Album>> Get()
        {
            return _db.Albums.ToList();
        }

        [HttpPost]
        public ActionResult<Album> Post([FromBody]Album album)
        {
        _db.Albums.Add(album);
        _db.SaveChanges();

        return album;
        }

        [HttpPut("{id}")]
        public ActionResult<Album> Put(int id, [FromBody]Album album)
        {
            if (album.Id == id)
            {
                _db.Albums.Update(album);
                _db.SaveChanges();
            }

            return album;
        }
        [HttpDelete("{id}")]
        public ActionResult<List<Album>> Delete(int id)
        {
            var album = _db.Albums.Find(id);
            _db.Albums.Remove(album);
            return _db.Albums.ToList();
        }

    }

}

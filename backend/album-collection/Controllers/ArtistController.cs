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
    public class ArtistController : ControllerBase
    {
        private readonly AlbumCollectionContext _db;

        public ArtistController(AlbumCollectionContext db)
        {
            _db = db;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Artist>> Get()
        {
            return _db.Artists.ToList();
        }
    }
}

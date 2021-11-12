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
    }

}

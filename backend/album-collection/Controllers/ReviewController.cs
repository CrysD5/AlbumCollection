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
    public class ReviewController : ControllerBase
    {
        private readonly AlbumCollectionContext _db;

        public ReviewController(AlbumCollectionContext db)
        {
            _db = db;
        }

        [HttpPost]
        public ActionResult<Review> Post([FromBody] Review review)
        {
            review.ReviewDate = DateTime.Now;
            _db.Reviews.Add(review);
            _db.SaveChanges();


            return review;
        }

        [HttpPut("{id}")]
        public ActionResult<Review> Put(int id, [FromBody] Review review)
        {
            if (review.Id == id)
            {
                _db.Reviews.Update(review);
                _db.SaveChanges();
            }

            return review;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Review>> Get()
        {
            return _db.Reviews.ToList();
        }

        [HttpDelete("{id}")]
        public ActionResult<List<Review>> Delete(int id)
        {
            var review = _db.Reviews.Find(id);
            _db.Reviews.Remove(review);
            return _db.Reviews.ToList();
        }
    }
}

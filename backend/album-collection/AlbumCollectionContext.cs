using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using album_collection.Models;
using System.Configuration;

namespace album_collection
{
    public class AlbumCollectionContext : DbContext
    {
        // add Dbsets here
        public DbSet<Album> Albums { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<Song> Songs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            var ConnectionString = "Server=(localdb)\\mssqllocaldb; Database=albumCollectionDB; Trusted_Connection=True";

            builder.UseSqlServer(ConnectionString).UseLazyLoadingProxies();
            //builder.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")).UseLazyLoadingPoxies();
            base.OnConfiguring(builder);

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //seed data
            builder.Entity<Artist>().HasData(
                    new Artist() { Id = 1, Name = "Keyshia Cole", ArtistLabel = "Geffen Records" },
                    new Artist() { Id = 2, Name = "Lay Zhang", ArtistLabel = "SM Entertainment" },
                    new Artist() { Id = 3, Name = "Gojira", ArtistLabel = "RoadRunner Records" },
                    new Artist() { Id = 4, Name = "The Blue Stones", ArtistLabel = "Entertainment One" }                    
                    );
            

            builder.Entity<Album>().HasData(
                new Album() { Id = 1,  ArtistId = 2, RecordLabel = "Zhang Yixing Studio", Title = "蓮 (Lit)", ReleaseYear = 2020, Genre = "M-POP (Mix-Mandarin-Pop)" },
                new Album() { Id = 2, ArtistId = 1, RecordLabel = "Primary Wave Music" , Title = "Just like You", ReleaseYear = 2007, Genre = "Hip-Hop, R&B" },
                new Album() { Id = 3, ArtistId = 4, RecordLabel = "eOne", Title = "Black Holes", ReleaseYear = 2015, Genre = "Blues Rock, Space Rock" },
                new Album() { Id = 4, ArtistId = 3, RecordLabel = "Silver Cord Studio", Title = "Magma", ReleaseYear = 2016, Genre = "Post-Metal" }
                );

            builder.Entity<Song>().HasData(
                   new Song() { Id = 1, AlbumId = 3, Title = "The Hard Part" },
                   new Song() { Id = 2, AlbumId = 4, Title = "Silvera" },
                   new Song() { Id = 3, AlbumId = 1, Title = "夜 (Late Night)" },
                   new Song() { Id = 4, AlbumId = 2, Title = "Didn't I Tell You (featuring Too $hort)" }
                   );

            builder.Entity<Review>().HasData(
                   new Review() { Id = 1, AlbumId = 4, Content = "Sample Review for now", ReviewerName = "Dan F." },
                   new Review() { Id = 2, AlbumId = 3, Content = "Sample Review for now", ReviewerName = "Eliza L." },
                   new Review() { Id = 3, AlbumId = 2, Content = "Sample Review for now", ReviewerName = "Ziyah F." },
                   new Review() { Id = 4, AlbumId = 1, Content = "Sample Review for now", ReviewerName = "Crys D." }
                   );

            

            //Migrate when complete

            base.OnModelCreating(builder);
        }
    }
}

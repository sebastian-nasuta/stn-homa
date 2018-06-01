using Microsoft.EntityFrameworkCore;
using Stn.Homa.Fleet.Api.Entities;

namespace Stn.Homa.Ef
{
    public class HomaDbContext : DbContext
    {
        public DbSet<Car> Cars { get; set; }

        public DbSet<CarModel> Models { get; set; }

        public DbSet<Cost> Costs { get; set; }

        public DbSet<FuelCost> FuelCosts { get; set; }

        public DbSet<Workshop> CarServices { get; set; }

        public DbSet<City> Cities { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Car>()
                .HasKey(c => c.Name);
            modelBuilder.Entity<Workshop>()
                .HasKey(w => w.Name);
            modelBuilder.Entity<City>()
                .HasKey(c => c.PostalCode);
        }

        public HomaDbContext(DbContextOptions<HomaDbContext> options) 
            : base(options)
        {
        }
    }
}

using Microsoft.EntityFrameworkCore;
using Stn.Homa.Fleet.Api.Entities;

namespace Stn.Homa.Ef
{
    public class HomaDbContext : DbContext
    {
        public DbSet<Car> Cars { get; set; }

        public DbSet<CarModel> Models { get; set; }

        public HomaDbContext(DbContextOptions<HomaDbContext> options) 
            : base(options)
        {
        }
    }
}

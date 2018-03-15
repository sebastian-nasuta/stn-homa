using Microsoft.EntityFrameworkCore;

namespace Stn.Homa.Ef
{
    public class HomaDbContext : DbContext
    {
        public HomaDbContext(DbContextOptions<HomaDbContext> options) 
            : base(options)
        {
        }
    }
}

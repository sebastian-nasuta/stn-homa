using Stn.Homa.Ef;
using Stn.Homa.Fleet.Api.Services;
using System.Collections.Generic;
using Stn.Homa.Fleet.Api.Entities;
using System.Linq;

namespace Stn.Homa.Fleet.Services.Cars
{
    public class CarsService : ICarsService
    {
        private readonly HomaDbContext _dbContext;

        public CarsService(HomaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Car> Get(string name)
        {
            if (name == null)
                return GetAll();
            else
                return _dbContext.Cars.Where(item => item.Name == name);
        }

        public IEnumerable<Car> GetAll()
        {
            return _dbContext.Cars;
        }
    }
}

using Stn.Homa.Ef;
using Stn.Homa.Fleet.Api.Services;
using System;
using System.Collections.Generic;
using System.Text;
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

        public Car Get(string name)
        {
            return _dbContext.Cars.First(item => item.Name == name);
        }

        public IEnumerable<Car> GetAll()
        {
            return _dbContext.Cars;
        }
    }
}

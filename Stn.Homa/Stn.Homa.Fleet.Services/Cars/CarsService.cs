using Stn.Homa.Ef;
using Stn.Homa.Fleet.Api.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Stn.Homa.Fleet.Api.Entities;

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
            throw new NotImplementedException("GET CAR !!!");
        }

        public IEnumerable<Car> GetAll()
        {
            throw new NotImplementedException("GET ALL CARS !!!");
        }
    }
}

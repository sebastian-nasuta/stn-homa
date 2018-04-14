using Stn.Homa.Fleet.Api.Services;
using System.Collections.Generic;
using Stn.Homa.Fleet.Api.Entities;
using Stn.Homa.Ef;

namespace Stn.Homa.Fleet.Services.CarModels
{
    public class CarModelsService : ICarModelsService
    {
        private readonly HomaDbContext _dbContext;

        public CarModelsService(HomaDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        public IEnumerable<CarModel> GetAll()
        {
            return _dbContext.Models;
        }
    }
}

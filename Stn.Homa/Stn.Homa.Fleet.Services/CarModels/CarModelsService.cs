using Stn.Homa.Fleet.Api.Services;
using System.Collections.Generic;
using Stn.Homa.Fleet.Api.Entities;
using Stn.Homa.Ef;
using System.Linq;
using System;

namespace Stn.Homa.Fleet.Services.CarModels
{
    public class CarModelsService : ICarModelsService
    {
        private readonly HomaDbContext _dbContext;

        public CarModelsService(HomaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public CarModel Get(int id)
        {   
            try
            {
                return _dbContext.Models.First(item => item.Id == id);
            }
            catch
            {
                // Error logging, post processing etc.
                throw new NotImplementedException("!!! BRAK MODELU !!!");
            }
        }

        public IEnumerable<CarModel> GetAll()
        {
            return _dbContext.Models;
        }
    }
}

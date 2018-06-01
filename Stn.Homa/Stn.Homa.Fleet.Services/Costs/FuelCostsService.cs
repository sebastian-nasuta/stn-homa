using Stn.Homa.Fleet.Api.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Stn.Homa.Fleet.Api.Entities;
using Stn.Homa.Ef;
using System.Linq;

namespace Stn.Homa.Fleet.Services.Costs
{
    public class FuelCostsService : IFuelCostsService
    {
        private readonly HomaDbContext _dbContext;

        public FuelCostsService(HomaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<FuelCost> Get(string name)
        {
            if (name == null)
                return GetAll();
            else
                return _dbContext.FuelCosts.Where(item => item.CarName == name);
        }

        public IEnumerable<FuelCost> GetAll()
        {
            return _dbContext.FuelCosts;
        }
    }
}

using Stn.Homa.Fleet.Api.Services;
using System.Collections.Generic;
using Stn.Homa.Fleet.Api.Entities;
using Stn.Homa.Ef;
using System.Linq;
using System;

namespace Stn.Homa.Fleet.Services.Costs
{
    public class CostsService : ICostsService
    {
        private readonly HomaDbContext _dbContext;

        public CostsService(HomaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void AddNewCost(string carNameFromQuery, string nameFromQuery, string workshopFromQuery, DateTime dateFromQuery, double? mileageFromQuery, decimal? priceFromQuery, string commentFromQuery)
        {
            _dbContext.Costs.Add(new Cost
            {
                CarName = carNameFromQuery,
                Name = nameFromQuery,
                WorkshopName = workshopFromQuery,
                Date = dateFromQuery,
                Mileage = mileageFromQuery,
                Price = priceFromQuery,
                Comment = commentFromQuery
            });
            _dbContext.SaveChanges();
        }
        
        public IEnumerable<Cost> Get(string name)
        {
            if (name == null)
                return GetAll();
            else
                return _dbContext.Costs.Where(item => item.CarName == name);
        }

        public IEnumerable<Cost> GetAll()
        {
            return _dbContext.Costs;
        }

        public void RemoveCost(int idFromQuery)
        {
            var cost = new Cost() { Id = idFromQuery };
            _dbContext.Costs.Remove(cost);
            _dbContext.SaveChanges();
        }


    }
}

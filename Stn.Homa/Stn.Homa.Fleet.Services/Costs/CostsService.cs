using Stn.Homa.Fleet.Api.Services;
using System.Collections.Generic;
using Stn.Homa.Fleet.Api.Entities;
using Stn.Homa.Ef;
using System.Linq;

namespace Stn.Homa.Fleet.Services.Costs
{
    public class CostsService : ICostsService
    {
        private readonly HomaDbContext _dbContext;

        public CostsService(HomaDbContext dbContext)
        {
            _dbContext = dbContext;
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
    }
}

using Stn.Homa.Fleet.Api.Services;
using System;
using System.Collections.Generic;
using System.Text;
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

        public Cost Get(int id)
        {
            return _dbContext.Costs.First(item => item.Id == id);
        }

        public IEnumerable<Cost> GetAll()
        {
            return _dbContext.Costs;
        }
    }
}

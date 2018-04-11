using Stn.Homa.Fleet.Api.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Stn.Homa.Fleet.Api.Entities;
using Stn.Homa.Ef;
using System.Linq;

namespace Stn.Homa.Fleet.Services.Cities
{
    public class CitiesService : ICitiesService
    {
        private readonly HomaDbContext _dbContext;

        public CitiesService(HomaDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        IEnumerable<City> ICitiesService.GetAll()
        {
            return _dbContext.Cities;
        }
    }
}

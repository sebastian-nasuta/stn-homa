using Stn.Homa.Fleet.Api.Services;
using System.Collections.Generic;
using Stn.Homa.Fleet.Api.Entities;
using Stn.Homa.Ef;

namespace Stn.Homa.Fleet.Services.Workshops
{
    public class WorkshopsService : IWorkshopsService
    {
        private readonly HomaDbContext _dbContext;

        public WorkshopsService(HomaDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        IEnumerable<Workshop> IWorkshopsService.GetAll()
        {
            return _dbContext.CarServices;
        }
    }
}

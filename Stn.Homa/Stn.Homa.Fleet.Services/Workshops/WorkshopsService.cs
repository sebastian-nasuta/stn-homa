using Stn.Homa.Fleet.Api.Services;
using System.Collections.Generic;
using Stn.Homa.Fleet.Api.Entities;
using Stn.Homa.Ef;
using System.Linq;

namespace Stn.Homa.Fleet.Services.Workshops
{
    public class WorkshopsService : IWorkshopsService
    {
        private readonly HomaDbContext _dbContext;

        public WorkshopsService(HomaDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<Workshop> GetAll()
        {
            return _dbContext.CarServices;
        }

        public IEnumerable<string> GetAllNames()
        {
            return _dbContext.CarServices.Select(item => item.Name);
        }
    }
}

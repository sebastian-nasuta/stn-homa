using Stn.Homa.Fleet.Api.Entities;
using System.Collections.Generic;

namespace Stn.Homa.Fleet.Api.Services
{
    public interface ICostsService
    {
        IEnumerable<Cost> GetAll();
        IEnumerable<Cost> Get(string name);
    }
}

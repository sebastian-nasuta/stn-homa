using Stn.Homa.Fleet.Api.Entities;
using System.Collections.Generic;

namespace Stn.Homa.Fleet.Api.Services
{
    public interface ICarModelsService
    {
        IEnumerable<CarModel> GetAll();
    }
}

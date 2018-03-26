using Stn.Homa.Fleet.Api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Stn.Homa.Fleet.Api.Services
{
    public interface ICarModelsService
    {
        IEnumerable<CarModel> GetAll();
        CarModel Get(int id);
    }
}

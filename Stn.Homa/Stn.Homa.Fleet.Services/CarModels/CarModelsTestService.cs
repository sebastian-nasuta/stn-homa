using Stn.Homa.Fleet.Api.Services;
using System.Collections.Generic;
using Stn.Homa.Fleet.Api.Entities;

namespace Stn.Homa.Fleet.Services.CarModels
{
    public class CarModelsTestService : ICarModelsService
    {
        public IEnumerable<CarModel> GetAll()
        {
            return new CarModel[] {
                new CarModel {
                Id = 1,
                Brand = "VW",
                Name = "Golf"
            },
                new CarModel {
                Id = 2,
                Brand = "Nissan",
                Name = "Almera"
            }
        };
        }
    }
}

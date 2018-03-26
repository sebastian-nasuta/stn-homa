using Stn.Homa.Fleet.Api.Services;
using System;
using System.Collections.Generic;
using System.Text;
using Stn.Homa.Fleet.Api.Entities;

namespace Stn.Homa.Fleet.Services.CarModels
{
    public class CarModelsTestService : ICarModelsService
    {
        public CarModel Get(int id)
        {
            return new CarModel
            {
                Id = id,
                Brand = "VW",
                Name = "Golf"
            };
        }

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

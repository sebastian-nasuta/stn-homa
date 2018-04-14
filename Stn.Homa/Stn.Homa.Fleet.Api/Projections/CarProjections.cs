using Stn.Homa.Fleet.Api.Dtos;
using Stn.Homa.Fleet.Api.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Stn.Homa.Fleet.Api.Projections
{
    public class CarProjections
    {
        public static CarSummaryDto ToSummary(Car car, IEnumerable<CarModel> carModels)
        {
            var carModel = carModels.First(model => model.Id == car.ModelId);

            return new CarSummaryDto
            {
                Name = car.Name,
                Brand = carModel.Brand,
                Model = carModel.Name,
                Type = car.Type,
                Vin = car.Vin,
                MaxPower = car.MaxPower,
                MaxTorque = car.MaxTorque
            };
        }
    };
}

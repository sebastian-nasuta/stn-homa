using Stn.Homa.Fleet.Api.Dtos;
using Stn.Homa.Fleet.Api.Entities;
using System.Collections.Generic;
using System.Linq;

namespace Stn.Homa.Fleet.Api.Projections
{
    public class FuelCostProjections
    {
        public static FuelCostSummaryDto ToSummary(FuelCost fuelCost)
        {
            return new FuelCostSummaryDto
                {
                    Id = fuelCost.Id,
                    CarName = fuelCost.CarName,
                    Date = fuelCost.Date,
                    Mileage = fuelCost.Mileage,
                    FuelPrice = fuelCost.FuelPrice,
                    Amount = fuelCost.Amount,
                    FullTank = fuelCost.FullTank,
                };
            }
        }
    }


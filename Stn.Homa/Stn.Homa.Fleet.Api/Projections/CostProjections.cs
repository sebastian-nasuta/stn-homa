using Stn.Homa.Fleet.Api.Dtos;
using Stn.Homa.Fleet.Api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Stn.Homa.Fleet.Api.Projections
{
    public class CostProjections
    {
        public static CostSummaryDto ToSummary(Cost cost, IEnumerable<Workshop> workshops, IEnumerable<City> cities)
        {
            if (cost.WorkshopName != null)
            {
                var workshop = workshops.First(item => item.Name == cost.WorkshopName);
                var city = cities.First(item => item.PostalCode == workshop.PostalCode);

                return new CostSummaryDto
                {
                    Id = cost.Id,
                    Name = cost.Name,
                    WorkshopName = cost.WorkshopName,
                    Street = workshop.Street,
                    HouseNumber = workshop.HouseNumber,
                    PostalCode = workshop.PostalCode,
                    CityName = city.Name,
                    Date = cost.Date,
                    Mileage = cost.Mileage,
                    Price = cost.Price,
                    Comment = cost.Comment
                };
            }
            else
            {
                return new CostSummaryDto
                {
                    Id = cost.Id,
                    Name = cost.Name,
                    WorkshopName = cost.WorkshopName,
                    Street = null,
                    HouseNumber = null,
                    PostalCode = null,
                    CityName = null,
                    Date = cost.Date,
                    Mileage = cost.Mileage,
                    Price = cost.Price,
                    Comment = cost.Comment
                };
            }
        }
    }
}

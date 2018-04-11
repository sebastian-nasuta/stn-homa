using System;
using System.Collections.Generic;
using System.Text;

namespace Stn.Homa.Fleet.Api.Dtos
{
    public class CostSummaryDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string WorkshopName { get; set; }

        public string Street { get; set; }

        public int? HouseNumber { get; set; }

        public int? PostalCode { get; set; }

        public string CityName { get; set; }

        public DateTime Date { get; set; }

        public double? Mileage { get; set; }

        public decimal? Price { get; set; }

        public string Comment { get; set; }
    }
}

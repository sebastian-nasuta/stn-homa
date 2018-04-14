using System;

namespace Stn.Homa.Fleet.Api.Dtos
{
    public class CostSummaryDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Workshop { get; set; }

        public string Street { get; set; }

        public int? Number { get; set; }

        public int? ZipCode { get; set; }

        public string City { get; set; }

        public DateTime Date { get; set; }

        public double? Mileage { get; set; }

        public decimal? Price { get; set; }

        public string Comment { get; set; }
    }
}

using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Stn.Homa.Fleet.Api.Entities
{
    public class Cost
    {
        public int Id { get; set; }

        public string CarName { get; set; }

        public string Name { get; set; }

        [Column("ServiceName")]
        public string WorkshopName { get; set; }

        public DateTime Date { get; set; }

        public double? Mileage { get; set; }

        public decimal? Price { get; set; }

        [Column("Comments")]
        public string Comment { get; set; }
    }
}

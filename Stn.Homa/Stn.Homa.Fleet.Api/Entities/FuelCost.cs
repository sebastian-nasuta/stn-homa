using System;

namespace Stn.Homa.Fleet.Api.Entities
{
    public class FuelCost
    {
        public int Id { get; set; }

        public string CarName { get; set; }

        public DateTime Date { get; set; }

        public double Mileage { get; set; }

        public decimal FuelPrice { get; set; }

        public double Amount { get; set; }

        public Boolean FullTank { get; set; }
    }
}

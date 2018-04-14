namespace Stn.Homa.Fleet.Api.Dtos
{
    public class CarSummaryDto
    {
        public string Name { get; set; }

        public string Brand { get; set; }

        public string Model { get; set; }

        public string Type { get; set; }

        public string Vin { get; set; }

        public double? MaxPower { get; set; }

        public double? MaxTorque { get; set; }
    }
}

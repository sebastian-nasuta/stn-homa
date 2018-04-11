namespace Stn.Homa.Fleet.Api.Entities
{
    public class Car
    {
        public string Name { get; set; }

        public int ModelId { get; set; }

        public string Type { get; set; }

        public double Year { get; set; }

        public string Vin { get; set; }

        public double? MaxPower { get; set; }

        public double? MaxTorque { get; set; }
    }
}

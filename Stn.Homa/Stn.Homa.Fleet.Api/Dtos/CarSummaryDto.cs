using System;
using System.Collections.Generic;
using System.Text;

namespace Stn.Homa.Fleet.Api.Dtos
{
    public class CarSummaryDto
    {
        public string Name { get; set; }

        public string Brand { get; set; }

        public string Model { get; set; }

        public string Type { get; set; }

        public float Year { get; set; }

        public string Vin { get; set; }

        public float MaxPower { get; set; }

        public float MaxTorque { get; set; }
    }
}

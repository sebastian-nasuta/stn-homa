using System;
using System.Collections.Generic;
using System.Text;

namespace Stn.Homa.Fleet.Api.Entities
{
    public class Car
    {
        public string Name { get; set; }

        public int ModelId { get; set; }

        public string Type { get; set; }

        public float Year { get; set; }

        public string Vin { get; set; }

        public float MaxPower { get; set; }

        public float MaxTorque { get; set; }
    }
}

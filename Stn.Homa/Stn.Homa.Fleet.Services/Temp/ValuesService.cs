using Stn.Homa.Fleet.Api.Services;
using System.Collections.Generic;

namespace Stn.Homa.Fleet.Services.Temp
{
    public class ValuesService : IValuesService
    {
        public IEnumerable<string> GetAll()
        {
            return new string[] { "teskt 1", "tekst 2", "tekst 3" };
        }
    }
}

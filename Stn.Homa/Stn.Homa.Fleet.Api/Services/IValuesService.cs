using System.Collections.Generic;

namespace Stn.Homa.Fleet.Api.Services
{
    public interface IValuesService
    {
        IEnumerable<string> GetAll();
    }
}

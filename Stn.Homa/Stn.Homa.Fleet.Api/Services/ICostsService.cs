using Stn.Homa.Fleet.Api.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Stn.Homa.Fleet.Api.Services
{
    public interface ICostsService
    {
        IEnumerable<Cost> GetAll();
        Cost Get(int id);
    }
}

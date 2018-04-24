using Stn.Homa.Fleet.Api.Entities;
using System;
using System.Collections.Generic;

namespace Stn.Homa.Fleet.Api.Services
{
    public interface ICostsService
    {
        IEnumerable<Cost> GetAll();
        IEnumerable<Cost> Get(string name);
        void RemoveCost(int idFromQuery);
        void AddNewCost(string carNamefromQuery, string nameFromQuery, string workshopFromQuery, DateTime dateFromQuery, double? mileageFromQuery, decimal? priceFromQuery, string commentFromQuery);
    }
}

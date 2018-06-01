using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Stn.Homa.Fleet.Api.Services;
using Stn.Homa.Fleet.Api.Projections;
using Stn.Homa.Fleet.Api.Dtos;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Stn.Homa.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class FuelCostsController : Controller
    {
        private readonly IFuelCostsService _fuelCostsService;

        public FuelCostsController(IFuelCostsService fuelCostsService)
        {
            _fuelCostsService = fuelCostsService;
        }

        // GET: api/fuelCosts
        [HttpGet]
        public IEnumerable<FuelCostSummaryDto> Get(string carName)
        {
            return _fuelCostsService.Get(carName).Select(item => FuelCostProjections.ToSummary(item));
        }
    }
}

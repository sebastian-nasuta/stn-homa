using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Stn.Homa.Fleet.Api.Services;
using Stn.Homa.Fleet.Api.Entities;
using Stn.Homa.Fleet.Api.Dtos;
using System.Linq;
using Stn.Homa.Fleet.Api.Projections;

namespace Stn.Homa.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class CostsController : Controller
    {
        private readonly ICostsService _costsService;
        private readonly IWorkshopsService _workshopsService;
        private readonly ICitiesService _citiesService;

        public CostsController(ICostsService costsService, IWorkshopsService workshopsService, ICitiesService citiesService)
        {
            _costsService = costsService;
            _workshopsService = workshopsService;
            _citiesService = citiesService;
        }

        // GET api/costs
        [HttpGet]
        public IEnumerable<CostSummaryDto> Get()
        {
            return _costsService.GetAll().Select(item => CostProjections.ToSummary(item, _workshopsService.GetAll(), _citiesService.GetAll()));
        }

        // GET api/costs/Almerka
        [HttpGet("{carName}")]
        public IEnumerable<CostSummaryDto> Get(string carName)
        {
            return _costsService.Get(carName).Select(item => CostProjections.ToSummary(item, _workshopsService.GetAll(), _citiesService.GetAll()));
        }
    }
}

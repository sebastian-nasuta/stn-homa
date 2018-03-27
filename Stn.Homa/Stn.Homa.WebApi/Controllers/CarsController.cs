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
    public class CarsController : Controller
    {
        private readonly ICarsService _carsService;
        private readonly ICarModelsService _carModelsService;
        
        public CarsController(ICarsService carsService, ICarModelsService carModelsService)
        {
            _carsService = carsService;
            _carModelsService = carModelsService;
        }

        // GET api/cars
        [HttpGet]
        public IEnumerable<CarSummaryDto> Get()
        {
            return _carsService.GetAll().Select(item => CarProjections.ToSummary(item, _carModelsService.GetAll()));
        }

        // GET api/cars/5
        [HttpGet("{name}")]
        public CarSummaryDto Get(string name)
        {
            return CarProjections.ToSummary(_carsService.Get(name), _carModelsService.GetAll());
        }

    }
}

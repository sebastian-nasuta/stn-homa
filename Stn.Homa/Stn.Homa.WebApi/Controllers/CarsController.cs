using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Stn.Homa.Fleet.Api.Services;
using Stn.Homa.Fleet.Api.Entities;
using System.Linq;

namespace Stn.Homa.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class CarsController : Controller
    {
        private readonly ICarsService carsService;

        public CarsController(ICarsService carsService)
        {
            this.carsService = carsService;
        }

        // GET api/cars
        [HttpGet]
        public IEnumerable<string> GetCarNames()
        {
            return carsService.GetAll().Select(item => item.Name);
        }

        // GET api/cars/5
        [HttpGet("{name}")]
        public Car Get(string name)
        {
            return carsService.Get(name);
        }

    }
}

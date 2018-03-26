using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Stn.Homa.Fleet.Api.Services;
using Stn.Homa.Fleet.Api.Entities;

namespace Stn.Homa.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class CarModelsController : Controller
    {
        private readonly ICarModelsService carModelsService;

        public CarModelsController(ICarModelsService carModelsService)
        {
            this.carModelsService = carModelsService;
        }

        // GET api/carModels
        [HttpGet]
        public IEnumerable<CarModel> Get()
        {
            return carModelsService.GetAll();
        }

        // GET api/carModels/5
        [HttpGet("{id}")]
        public CarModel Get(int id)
        {
            return carModelsService.Get(id);
        }

    }
}

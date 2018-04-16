using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Stn.Homa.Fleet.Api.Services;
using Stn.Homa.Fleet.Api.Dtos;
using System.Linq;
using Stn.Homa.Fleet.Api.Projections;

namespace Stn.Homa.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class WorkshopsController : Controller
    {
        private readonly IWorkshopsService _workshopsService;
        
        public WorkshopsController(IWorkshopsService workshopsService)
        {
            _workshopsService = workshopsService;
        }

        // GET api/workshops
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return _workshopsService.GetAllNames();
        }

        //// GET api/cars/5
        //[HttpGet("{name}")]
        //public CarSummaryDto Get(string name)
        //{
        //    return CarProjections.ToSummary(_carsService.Get(name), _carModelsService.GetAll());
        //}

    }
}

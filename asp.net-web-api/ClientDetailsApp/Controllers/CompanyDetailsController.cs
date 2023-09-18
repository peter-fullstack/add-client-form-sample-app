using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ClientDetailsApp.Data;
using ClientDetailsApp.Models;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace ClientDetailsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyDetailsController : ControllerBase
    {
        private readonly IRepository<CompanyDetails> _repository;

        public CompanyDetailsController(IRepository<CompanyDetails> context)
        {
            _repository = context;
        }

        // GET: api/CompanyDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyDetails>>> GetCompanyDetails()
        {
          var companies = await _repository.GetAll();

          return companies;
        }

        // GET: api/CompanyDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CompanyDetails>> GetCompanyDetails(Guid id)
        {
            var companyDetails = await _repository.Get(id);

            if (companyDetails == null)
            {
                return NotFound();
            }

            return companyDetails;
        }

        // PUT: api/CompanyDetails/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyDetails(Guid id, CompanyDetails companyDetails)
        {
            if (id != companyDetails.Id)
            {
                return BadRequest();
            }

            await _repository.Update(companyDetails);

            return Ok(companyDetails);
        }

        // POST: api/CompanyDetails
        [HttpPost]
        public async Task<ActionResult<CompanyDetails>> PostCompanyDetails(CompanyDetails companyDetails)
        {
            var company = await _repository.Add(companyDetails);
         
            return Ok(company);
        }

        // DELETE: api/CompanyDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompanyDetails(Guid id)
        {
            await _repository.Delete(id);
           
            return NoContent();
        }
    }
}

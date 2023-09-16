using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ClientDetailsApp.Data;
using ClientDetailsApp.Models;

namespace ClientDetailsApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyDetailsController : ControllerBase
    {
        private readonly CompanyDetailsAppContext _context;

        public CompanyDetailsController(CompanyDetailsAppContext context)
        {
            _context = context;
        }

        // GET: api/CompanyDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CompanyDetails>>> GetCompanyDetails()
        {
          if (_context.CompanyDetails == null)
          {
              return NotFound();
          }

          var companies = await _context.CompanyDetails.ToListAsync();

          return companies;
        }

        // GET: api/CompanyDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CompanyDetails>> GetCompanyDetails(int id)
        {
          if (_context.CompanyDetails == null)
          {
              return NotFound();
          }
            var companyDetails = await _context.CompanyDetails.FindAsync(id);

            if (companyDetails == null)
            {
                return NotFound();
            }

            return companyDetails;
        }

        // PUT: api/CompanyDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompanyDetails(Guid id, CompanyDetails companyDetails)
        {
            if (id != companyDetails.Id)
            {
                return BadRequest();
            }

            _context.Entry(companyDetails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompanyDetailsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CompanyDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CompanyDetails>> PostCompanyDetails(CompanyDetails companyDetails)
        {
          if (_context.CompanyDetails == null)
          {
              return Problem("Entity set 'ClientDetailsAppContext.CompanyDetails'  is null.");
          }
            _context.CompanyDetails.Add(companyDetails);
            await _context.SaveChangesAsync();

            return Ok();// CreatedAtAction("GetCompanyDetails", new { id = companyDetails.Id }, companyDetails);
        }

        // DELETE: api/CompanyDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompanyDetails(int id)
        {
            if (_context.CompanyDetails == null)
            {
                return NotFound();
            }
            var companyDetails = await _context.CompanyDetails.FindAsync(id);
            if (companyDetails == null)
            {
                return NotFound();
            }

            _context.CompanyDetails.Remove(companyDetails);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CompanyDetailsExists(Guid id)
        {
            return (_context.CompanyDetails?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}

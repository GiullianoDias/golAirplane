using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using apiAirplane.Data;
using apiAirplane.Model;

namespace apiAirplane.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirplanesController : ControllerBase
    {
        private readonly apContext _context;

        public AirplanesController(apContext context)
        {
            _context = context;
        }

        // GET: api/airplanes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<airplaneModel>>> GetairplaneModel()
        {
            // List<airplaneModel> airplanes = _context.airplaneModel.ToList();
            return await _context.airplaneModel.ToListAsync();
        }

        // GET: api/airplanes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<airplaneModel>> GetairplaneModel(string id)
        {
            var airplaneModel = await _context.airplaneModel.FindAsync(id);

            if (airplaneModel == null)
            {
                return NotFound();
            }

            return airplaneModel;
        }

        // PUT: api/airplanes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutairplaneModel(string id, airplaneModel airplaneModel)
        {
            if (id != airplaneModel.Code)
            {
                return BadRequest();
            }

            _context.Entry(airplaneModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!airplaneModelExists(id))
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

        // POST: api/airplanes
        [HttpPost]
        public async Task<ActionResult<airplaneModel>> PostairplaneModel(airplaneModel airplaneModel)
        {
            _context.airplaneModel.Add(airplaneModel);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (airplaneModelExists(airplaneModel.Code))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetairplaneModel", new { id = airplaneModel.Code }, airplaneModel);
        }

        // DELETE: api/airplanes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<airplaneModel>> DeleteairplaneModel(string id)
        {
            var airplaneModel = await _context.airplaneModel.FindAsync(id);
            if (airplaneModel == null)
            {
                return NotFound();
            }

            _context.airplaneModel.Remove(airplaneModel);
            await _context.SaveChangesAsync();

            return airplaneModel;
        }

        private bool airplaneModelExists(string id)
        {
            return _context.airplaneModel.Any(e => e.Code == id);
        }
    }
}

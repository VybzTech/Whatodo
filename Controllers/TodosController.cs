using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Whatodo.Models;

namespace Whatodo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodosController : ControllerBase
    {
        // DEFINE CONTEXT
        private readonly TodosContext _context;
        // CREATE CONSTRUCTOR
        public TodosController(TodosContext context)
        {
            _context = context;
        }



        // GET ALL TODOS
        [HttpGet]
        //public IEnumerable<string> Get() {  return new string[] { "value1", "value2" };}
        public async Task<ActionResult<IEnumerable<Todos>>> GetTodos()
        {
            if (_context.Todos == null)
            {
                return NotFound();
            }
            return await _context.Todos.ToListAsync();
        }

        //  GET BY ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Todos>> SingleTodo(int id)
        {
            if (_context.Todos == null)
            {
                return NotFound();
            }
            var Todo = _context.Todos.Find(id);
            if (Todo == null)
            {
                return NotFound();

            }
            return Todo;

        }

        // POST api/<TodosController>    //  POST FROM BODY
        [HttpPost]
        //public void Post([FromBody] string value)
        public async Task<ActionResult<Todos>> AddTodo(Todos value)
        {
            _context.Todos.Add(value);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTodos), new { id = value.ID }, value);
        }

        // UPDATE VALUES
        [HttpPut("{id}")]
        public async Task<ActionResult> EditTodo(int id, Todos Todo)
        //void Put(int id, [FromBody] string value)
        {
            if (id != Todo.ID)
            {
                return BadRequest();

            }
            _context.Entry(Todo).State = EntityState.Modified;
            try { await _context.SaveChangesAsync(); } catch (DbUpdateConcurrencyException) { throw; }
            return Ok();

        }

        // DELETE BY ID
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteTodo (int id)
        {
            if (_context.Todos == null) { return NotFound(); }
            var delTodo = await _context.Todos.FindAsync(id);   
                if (delTodo == null) { return NotFound(); }
                _context.Todos.Remove(delTodo);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}

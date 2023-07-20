using Microsoft.EntityFrameworkCore;

namespace Whatodo.Models
{
    public class TodosContext : DbContext
    {
        public TodosContext(DbContextOptions<TodosContext> options) : base(options)
        {
        }
        public DbSet<Todos> Todos { get; set; }
    }
}

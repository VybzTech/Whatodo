using Microsoft.EntityFrameworkCore;
using Whatodo.Models;

namespace Whatodo.Models
{
    public class TodosContext : DbContext
    {
        public TodosContext(DbContextOptions<TodosContext> options) : base(options)
        {
        }
        public DbSet<Todos> Todos { get; set; }
    //public DbSet<Todos> Todos => Set<Todos>();
    }
}

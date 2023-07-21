using System.ComponentModel.DataAnnotations;

namespace Whatodo.Models
{
    public class Todos
    {
        public int ID { get; set; }
        [Required]
        public string?  Task { get; set; }
        
        public string? Team { get; set; }
        
        public string? TeamMember { get; set; }
        
        public string? Created { get; set; }
        
        public string? Edited { get; set; }
        
        [Required] 
        public bool Completed { get; set; }

    }
}

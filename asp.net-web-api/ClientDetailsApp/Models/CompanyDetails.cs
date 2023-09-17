using ClientDetailsApp.Data;
using System.ComponentModel.DataAnnotations;

namespace ClientDetailsApp.Models
{
    public class CompanyDetails: IEntity
    {
        public Guid? Id { get; set; }

        [Required]
        [StringLength(60, MinimumLength = 3)]
        public string CompanyName { get; set; } = "";

        [StringLength(60)]
        public string Address { get; set; } = "";

        [StringLength(60)]
        public string City { get; set; } = "";

        [StringLength(60)]
        public string State { get; set; } = "";

        [StringLength(60)]
        public string ContactName { get; set; } = "";

        [StringLength(60)]
        public string JobTitle { get; set; } = "";

        [StringLength(60)]
        public string Email { get; set; } = "";

        [StringLength(60)]
        public string Mobile { get; set; } = "";
    }
}

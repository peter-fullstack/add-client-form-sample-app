using Microsoft.EntityFrameworkCore;

namespace ClientDetailsApp.Data
{
    public class CompanyDetailsAppContext : DbContext
    {
        public CompanyDetailsAppContext (DbContextOptions<CompanyDetailsAppContext> options)
            : base(options)
        {
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseInMemoryDatabase(databaseName: "ClientDetails");
        //}

        public DbSet<ClientDetailsApp.Models.CompanyDetails> CompanyDetails { get; set; } = default!;
    }
}

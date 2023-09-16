using ClientDetailsApp.Models;

namespace ClientDetailsApp.Data
{
    public class CompanyDetailsRepository : Repository<CompanyDetails, CompanyDetailsAppContext>
    {
        public CompanyDetailsRepository(CompanyDetailsAppContext context) : base(context)
        {

        }
    }
}

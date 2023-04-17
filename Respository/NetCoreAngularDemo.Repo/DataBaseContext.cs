using Microsoft.EntityFrameworkCore;
using NetCoreAngularDemo.Data.Entities.Product;
using NetCoreAngularDemo.Data.Entities.Identity;
using NetCoreAngularDemo.Data.Entities.CategoryClass;
using NetCoreAngularDemo.Data.Entities.ManufacturerEntities;


namespace NetCoreAngularDemo.Repo
{
    public class DataBaseContext : DbContext
    {

        public DataBaseContext(
            DbContextOptions<DataBaseContext> options) : base(options)
        {
        }

        public DbSet<Category> Category { get; set; }
        public DbSet<Manufacturer> Manufacturer { get; set; }
        public DbSet<Products> Products { get; set; }
        public DbSet<ProductImages> ProductImages { get; set; }
    }
}

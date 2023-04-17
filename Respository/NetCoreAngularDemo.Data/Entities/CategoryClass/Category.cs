using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NetCoreAngularDemo.Data.Entities.Identity;
using NetCoreAngularDemo.Data.Entities.ManufacturerEntities;
using NetCoreAngularDemo.Data.Entities.Product;

namespace NetCoreAngularDemo.Data.Entities.CategoryClass
{
    public class Category : BaseEntity
    {
        public string Name { get; set; }
        public int SortOrder { set; get; }
        public bool IsShowOnHome { set; get; }
        public ICollection<Products> Products { get; set; }
    }
}

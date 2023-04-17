using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using NetCoreAngularDemo.Data.Enums;
using NetCoreAngularDemo.Data.Entities.Identity;
using NetCoreAngularDemo.Data.Entities.ManufacturerEntities;
using NetCoreAngularDemo.Data.Entities.CategoryClass;

namespace NetCoreAngularDemo.Data.Entities.Product
{
    public class Products: BaseEntity
    {
        [MaxLength(200)]
        public string Name { get; set; }
        [MaxLength(200)]
        public decimal Price { set; get; }
        public int ViewCount { get; set; }
        public decimal OriginalPrice { set; get; }
        public int Stock { set; get; }
        public string SerialNumber { set; get; }
        public List<ProductImages> ProductImages { get; set; }
        public Category Category { get; set; }
        public long CategoryId { get; set; }
        public ProductStatus ProductStatus { get; set; }
        public Manufacturer Manufacturer { get; set; }
        public long ManufacturerId { get; set; }
    }
}

namespace AspAngularSample.Services.Item.Models
{
    using Common.Mapping;
    using Data.Models;
    using System;

    public class ItemFormServiceModel : IMapFrom<Item>
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public int Quantity { get; set; }

        public DateTime DateOfAdded { get; set; }
    }
}

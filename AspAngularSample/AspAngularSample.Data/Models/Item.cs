namespace AspAngularSample.Data.Models
{
    using AutoMapper;
    using Common.Mapping;
    using System;
    using System.ComponentModel.DataAnnotations;

    public class Item : IHaveCustomMapping
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public int Quantity { get; set; }

        public DateTime DateOfAdded { get; set; }

        public void ConfigureMapping(Profile mapper)
        {
            mapper.CreateMap<Item, Item>()
                .ForMember(dest => dest.Id, opt => opt.Ignore());
        }
    }
}

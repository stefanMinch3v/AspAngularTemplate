namespace AspAngularSample.Web.Infrastructure
{
    using AutoMapper;
    using Data.Models;
    using System;
    using ViewModels;

    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            this.CreateMap<ItemFormViewModel, Item>()
                .ForMember(dest => dest.DateOfAdded, opt => opt.MapFrom(val => DateTime.UtcNow))
                .ReverseMap();

            this.CreateMap<Item, Item>()
                .ForMember(dest => dest.Id, opt => opt.Ignore());
        }
    }
}

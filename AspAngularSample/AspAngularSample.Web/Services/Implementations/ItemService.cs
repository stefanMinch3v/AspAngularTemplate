namespace AspAngularSample.Web.Services.Implementations
{
    using AutoMapper;
    using Data;
    using Data.Models;
    using Microsoft.Extensions.Logging;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class ItemService : IItemService
    {
        private readonly ShopDbContext dbContext;
        private readonly IMapper mapper;
        private readonly ILogger<ShopDbContext> logger;

        public ItemService(
            ShopDbContext dbContext, 
            IMapper mapper,
            ILogger<ShopDbContext> logger)
        {
            this.dbContext = dbContext;
            this.mapper = mapper;
            this.logger = logger;
        }

        public IEnumerable<Item> GetAllItems()
            => this.dbContext.Items.ToList();

        public Item GetItem(int id)
            => this.dbContext.Items.FirstOrDefault(i => i.Id == id);

        public void AddItem(Item item)
        {
            try
            {
                this.dbContext.Items.Add(item);
                this.dbContext.SaveChanges();

                this.logger.LogInformation(">>>>>>>>>>>>>New item added.");
            }
            catch (Exception ex)
            {
                this.logger.LogError(ex.Message);
            }

        }

        public void EditItem(int id, Item item)
        {
            var existingItem = this.dbContext.Items.Find(id);
            if (existingItem == null)
            {
                throw new InvalidOperationException("Item does not exist.");
            }

            var result = this.mapper.Map(item, existingItem);

            this.dbContext.Items.Update(result);
            this.dbContext.SaveChanges();

            this.logger.LogInformation($">>>>>>>>>>>Item {item.Title} was updated.");
        }

        public void DeleteItem(int id)
        {
            var existingItem = this.dbContext.Items.Find(id);
            if (existingItem == null)
            {
                throw new InvalidOperationException("Item does not exist.");
            }

            this.dbContext.Items.Remove(existingItem);
            this.dbContext.SaveChanges();

            this.logger.LogInformation($">>>>>>>>>>>>>Item {existingItem.Title} was deleted.");
        }
    }
}

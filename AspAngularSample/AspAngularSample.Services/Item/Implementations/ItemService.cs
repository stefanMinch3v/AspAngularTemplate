namespace AspAngularSample.Services.Item.Implementations
{
    using AutoMapper;
    using AutoMapper.QueryableExtensions;
    using Data;
    using Data.Models;
    using Microsoft.EntityFrameworkCore;
    using Microsoft.Extensions.Logging;
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;

    public class ItemService : IItemService
    {
        private readonly ShopDbContext shopDbContext;
        private readonly ILogger<ShopDbContext> logger;

        public ItemService(
            ShopDbContext shopDbContext,
            ILogger<ShopDbContext> logger)
        {
            this.shopDbContext = shopDbContext;
            this.logger = logger;
        }

        public async Task<IEnumerable<ItemFormServiceModel>> All()
            => await this.shopDbContext.Items
                .OrderByDescending(i => i.DateOfAdded)
                .ProjectTo<ItemFormServiceModel>()
                .ToListAsync();

        public async Task<ItemFormServiceModel> GetByIdAsync(int id)
            => await this.shopDbContext.Items
                .Where(i => i.Id == id)
                .ProjectTo<ItemFormServiceModel>()
                .FirstOrDefaultAsync();

        public async Task AddAsync(Item item)
        {
            try
            {
                this.shopDbContext.Items.Add(item);
                await this.shopDbContext.SaveChangesAsync();

                this.logger.LogInformation(">>>>>>>>>>>>>New item added.");
            }
            catch (Exception ex)
            {
                this.logger.LogError(ex.Message);
            }
        }

        public async Task UpdateAsync(int id, Item item)
        {
            var existingItem = this.shopDbContext.Items.Find(id);
            if (existingItem == null)
            {
                throw new InvalidOperationException("Item does not exist.");
            }

            var result = Mapper.Map(item, existingItem);

            this.shopDbContext.Items.Update(result);
            await this.shopDbContext.SaveChangesAsync();

            this.logger.LogInformation($">>>>>>>>>>>Item {existingItem.Title} was updated.");
        }

        public async Task DeleteAsync(int id)
        {
            var existingItem = this.shopDbContext.Items.Find(id);
            if (existingItem == null)
            {
                throw new InvalidOperationException("Item does not exist.");
            }

            this.shopDbContext.Items.Remove(existingItem);
            await this.shopDbContext.SaveChangesAsync();

            this.logger.LogInformation($">>>>>>>>>>>>>Item {existingItem.Title} was deleted.");
        }
    }
}

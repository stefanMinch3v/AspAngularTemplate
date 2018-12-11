namespace AspAngularSample.Services.Item
{
    using Data.Models;
    using Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IItemService
    {
        Task<IEnumerable<ItemFormServiceModel>> All();

        Task<ItemFormServiceModel> GetByIdAsync(int id);

        Task AddAsync(Item item);

        Task UpdateAsync(int id, Item item);

        Task DeleteAsync(int id);
    }
}

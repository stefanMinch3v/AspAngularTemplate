namespace AspAngularSample.Web.Services
{
    using Data.Models;
    using System.Collections.Generic;

    public interface IItemService
    {
        IEnumerable<Item> GetAllItems();

        Item GetItem(int id);

        void AddItem(Item item);

        void EditItem(int id, Item item);

        void DeleteItem(int id);
    }
}

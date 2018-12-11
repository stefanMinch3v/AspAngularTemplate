namespace AspAngularSample.Web.Controllers
{
    using AutoMapper;
    using Data.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Services.Item;
    using Services.Item.Models;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using ViewModels;

    using static WebConstants;

    public class ItemsController : BaseController
    {
        private readonly IItemService itemService;

        public ItemsController(IItemService itemService)
        {
            this.itemService = itemService;
        }

        // GET api/items
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<IEnumerable<ItemFormServiceModel>>> Get(bool includeIds = true)
        {
            try
            {
                var items = await this.itemService.All();

                if (includeIds)
                {
                    return this.Ok(items);
                }
                
                var results = Mapper.Map<IEnumerable<ItemFormServiceModel>, IEnumerable<ItemFormViewModel>>(items);

                return this.Ok(results);
            }
            catch (Exception ex)
            {
                return this.BadRequest(ex.Message);
            }
        }

        // GET api/items/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemFormServiceModel>> Get(int id)
        {
            var item = await this.itemService.GetByIdAsync(id);
            if (item == null)
            {
                return this.NotFound();
            }
            
            var result = Mapper.Map<ItemFormServiceModel, ItemFormViewModel>(item);

            return this.Ok(result);
        }

        // POST api/items
        [HttpPost]
        [Authorize(Roles = AdminRole)]
        public async Task<ActionResult> Post([FromBody] ItemFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest();
            }

            try
            {
                var item = Mapper.Map<ItemFormViewModel, Item>(model);

                await this.itemService.AddAsync(item);

                return this.Created(string.Empty, item);
            }
            catch (Exception ex)
            {
                return this.BadRequest(ex.Message);
            } 
        }

        // PUT api/items/5
        [HttpPut("{id}")]
        [Authorize(Roles = AdminRole)]
        public async Task<ActionResult> Put(int id, [FromBody] ItemFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return this.BadRequest();
            }

            try
            {
                var result = Mapper.Map<ItemFormViewModel, Item>(model);

                await this.itemService.UpdateAsync(id, result);

                return this.Ok(model);
            }
            catch (Exception ex)
            {
                return this.BadRequest(ex.Message);
            }
        }

        // DELETE api/items/5
        [HttpDelete("{id}")]
        [Authorize(Roles = AdminRole)]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                await this.itemService.DeleteAsync(id);

                return this.Ok($"Item was deleted");
            }
            catch (Exception ex)
            {
                return this.BadRequest(ex.Message);
            }   
        }
    }
}

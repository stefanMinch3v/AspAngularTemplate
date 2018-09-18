namespace AspAngularSample.Web.Controllers
{
    using AutoMapper;
    using Data.Models;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Mvc;
    using Services;
    using System;
    using System.Collections.Generic;
    using ViewModels;

    using static WebConstants;

    public class ItemsController : BaseController
    {
        private readonly IItemService itemService;
        private readonly IMapper mapper;

        public ItemsController(IItemService itemService, IMapper mapper)
        {
            this.itemService = itemService;
            this.mapper = mapper;
        }

        // GET api/items
        [HttpGet]
        [AllowAnonymous]
        public ActionResult<IEnumerable<Item>> Get(bool includeIds = true)
        {
            try
            {
                var items = this.itemService.GetAllItems();

                if (includeIds)
                {
                    return Ok(items);
                }

                var results = this.mapper.Map<IEnumerable<Item>, IEnumerable<ItemFormViewModel>>(items);

                return Ok(results);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/items/5
        [HttpGet("{id}")]
        public ActionResult<Item> Get(int id)
        {
            var item = this.itemService.GetItem(id);
            if (item == null)
            {
                return NotFound();
            }

            var result = this.mapper.Map<Item, ItemFormViewModel>(item);

            return Ok(result);
        }

        // POST api/items
        [HttpPost]
        [Authorize(Roles = AdminRole)]
        public ActionResult Post([FromBody] ItemFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var item = this.mapper.Map<ItemFormViewModel, Item>(model);

                this.itemService.AddItem(item);

                return Created(string.Empty, item);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            } 
        }

        // PUT api/items/5
        [HttpPut("{id}")]
        [Authorize(Roles = AdminRole)]
        public ActionResult Put(int id, [FromBody] ItemFormViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            try
            {
                var result = this.mapper.Map<ItemFormViewModel, Item>(model);

                this.itemService.EditItem(id, result);

                return Ok(model);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/items/5
        [HttpDelete("{id}")]
        [Authorize(Roles = AdminRole)]
        public ActionResult Delete(int id)
        {
            try
            {
                this.itemService.DeleteItem(id);

                return Ok($"Item was deleted");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }   
        }
    }
}

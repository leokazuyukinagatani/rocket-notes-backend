const { response } = require("express");
const knex = require("../database/knex");

class TagsController {

  async index ( request, response ) {
    const user_id  = request.user.id;

    const tags = await knex("tags")
      .where({ user_id })
      .groupBy("name");

    return response.json(tags);
  }

  async create( request, response )  { 
    const {note_id, name, user_id } = request.body;
    await knex.insert(note_id, name, user_id);
  }

} module.exports = TagsController;
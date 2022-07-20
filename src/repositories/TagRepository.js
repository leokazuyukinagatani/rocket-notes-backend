const knex = require("../database/knex");

class TagRepository {

  async create({ note_id, name, user_id }) {
   
    await knex('tags').insert({note_id, name, user_id});

  }

  async index({user_id}) {

    const tags = await knex("tags").where({ user_id }).groupBy("name");
    return tags;
  }
}

module.exports = TagRepository;
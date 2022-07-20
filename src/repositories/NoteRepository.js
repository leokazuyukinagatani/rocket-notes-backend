const knex = require("../database/knex");

class NoteRepository {

  async create({title, description, user_id}) {
    const note_id = await knex("notes").insert({
      title,
      description,
      user_id
    });

    return note_id;
  }

  async findById({id}) {
    const noteSelected = await knex("notes").where({id}).first();

    return noteSelected;
  }

}

module.exports = NoteRepository;
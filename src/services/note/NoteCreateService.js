const AppError = require("../../utils/AppError");
const { hash } = require("bcryptjs");

class NoteCreateService {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  async execute({ name, email, password }){

   
    const noteCreated = await this.noteRepository.create({ name, email, password:hashedPassword });

    return noteCreated;
  }
}
module.exports = NoteCreateService;
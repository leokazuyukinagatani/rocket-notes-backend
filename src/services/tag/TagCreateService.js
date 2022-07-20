const AppError = require("../../utils/AppError");

class TagCreateService {
  constructor(tagRepository) {
    this.tagRepository = tagRepository;
  }
 

  async execute({note_id, name, user_id}) {

    const tagIdCreate = await this.tagRepository.create({note_id, name, user_id});
    return tagIdCreate;
  }

}
module.exports = TagCreateService;
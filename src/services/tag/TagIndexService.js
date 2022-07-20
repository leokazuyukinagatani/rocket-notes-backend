const AppError = require("../../utils/AppError");

class TagIndexService {
  constructor(tagRepository) {
    this.tagRepository = tagRepository;
  }
 

  async execute({ user_id }) {

    const tags = this.tagRepository.index({user_id});

    return tags;
  }

}
module.exports = TagIndexService;
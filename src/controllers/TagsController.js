const TagRepository = require("../repositories/TagRepository");
const TagCreateService = require("../services/tag/TagCreateService");
const TagIndexService = require("../services/tag/TagIndexService");

class TagsController {

  async index ( request, response ) {
    const user_id  = request.user.id;

    const tagRepository = new TagRepository();
    const tagIndexService = new TagIndexService(tagRepository);

    const tags = tagIndexService.execute(user_id);
    
    return response.json(tags);
  }

  async create( request, response )  { 
    const {note_id, name, user_id } = request.body;

    const tagRepository = new TagRepository();
    const tagCreateService = new TagCreateService(tagRepository);

    await tagCreateService.execute({note_id, name, user_id});
    return response.json();
  }
  
} module.exports = TagsController;
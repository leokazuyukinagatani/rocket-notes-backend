const sqliteConnection = require("../database/sqlite");

class UserRepository {
  async findByEmail( email ) {
    const database = await sqliteConnection();

    const userSelected = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    return userSelected;
  }

  async findById( user_id ) {
    const database = await sqliteConnection();

    const userSelected = await database.get(`SELECT * FROM users WHERE id = (?)`,[user_id]);

    return userSelected;
  }

  async create({ name, email, password }) {
    const database = await sqliteConnection();

    const userId = await database.run("INSERT INTO users (name, email, password) VALUES( ? , ?, ?)", 
    [name, email, password]);

    return { id:userId };
  }

  async update({user}) {
    const database = await sqliteConnection();

    const userUpdated = database.run(`
      UPDATE users SET
      name = ?,
      email = ?,
      password = ?,
      updated_at = DATETIME('now')
      WHERE id = ?
    `, [user.name, user.email, user.password, user_id]
    );

    return userUpdated;
  }
}

module.exports = UserRepository;
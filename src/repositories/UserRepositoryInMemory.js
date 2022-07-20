class UserRepositoryInMemory {
  users = [];
  async create({ name, email, password }){
    const user  = {
      id: Math.floor(Math.random() * 1000) + 1 ,
      name,
      email,
      password
    };

    this.users.push(user);

    return user;
  }

  async findByEmail( email ) {
    return this.users.find(user => user.email === email);
  }

  async findById( user_id ) {
    return this.users.find(user => user.id === user_id);
  }

}

module.exports = UserRepositoryInMemory;
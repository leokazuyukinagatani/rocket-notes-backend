const authConfig = require('../configs/auth');

const AppError = require("../utils/AppError");

const { verify } = require("jsonwebtoken");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;
  
  if(!authHeader){
    throw new AppError("JWT token não foi informado", 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id} = verify(token, authConfig.jwt.secret);
    request.user = {
      id: Number(user_id),
    };

    return next();
  }catch {
    throw new AppErro("JWT token inválido", 401);
  }

}
module.exports = ensureAuthenticated;

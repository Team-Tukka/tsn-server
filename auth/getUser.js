import config from 'config';
import jwt from 'jsonwebtoken';

/* Hvis brugeren har en token, bliver den verificeret ved hjælp af jwt´s verify funktion */
const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, config.get('jwtSecret'));
    }
    return null;
  } catch (err) {
    return 'Token eksisterer ikke!';
  }
};

module.exports = getUser;

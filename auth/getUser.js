import config from 'config';
import jwt from 'jsonwebtoken';

/* Hvis brugeren har en user, bliver den verificeret
 *  ved hjælp af jwt´s verify funktion.
 */
const getUser = token => {
  try {
    if (token) {
      return jwt.verify(token, config.get('jwtSecret'));
    }
    return null;
  } catch (err) {
    return (
      'Token eksisterer ikke (TestBesked, getUser.js i auth mappen,' +
      'slet / ret mig hvis jeg virker'
    );
  }
};

module.exports = getUser;

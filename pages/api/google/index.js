import passport from 'passport';
import dbConnect from '../../../lib/dbConnect';
import '../../../lib/passport';

export default async function (req, res, next) {
  await dbConnect();

  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })(req, res, next);
}

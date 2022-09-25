import { setCookie } from 'cookies-next';
import passport from 'passport';
import dbConnect from '../../../lib/dbConnect';
import '../../../lib/passport';

export default async function (req, res, next) {
  await dbConnect();
  passport.authenticate('google', (err, user, info) => {
    if (err || !user) {
      return res.redirect('http://localhost:3000/?a=auth_fail');
    }

    // set cookie and send redirect
    setCookie('token', info.token, {
      req,
      res,
    });
    res.redirect('http://localhost:3000/');
  })(req, res, next);
}

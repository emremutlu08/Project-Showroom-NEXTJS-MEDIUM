import { setCookie } from 'cookies-next';
import passport from 'passport';
import dbConnect from '../../../lib/dbConnect';
import '../../../lib/passport';

export default async function (req, res, next) {
  await dbConnect();
  passport.authenticate('google', (err, user, info) => {
    console.log(user, 'user');
    if (err || !user) {
      return res.redirect(`${process.env.NEXT_PUBLIC_URL}/?a=auth_fail`);
    }

    // set cookie and send redirect
    setCookie('token', info.token, {
      req,
      res,
    });
    res.redirect(`${process.env.NEXT_PUBLIC_URL}/`);
  })(req, res, next);
}

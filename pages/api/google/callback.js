import { setCookie } from 'cookies-next';
import passport from 'passport';
import connect from '../../../lib/database';
import '../../../lib/passport';
// import Profiles from '../../../models/Profiles';

export default async function (req, res, next) {
  await connect();
  passport.authenticate('google', (err, user, info) => {
    if (err || !user) {
      return res.redirect(process.env.NEXT_PUBLIC_URL + '/');
    }
    setCookie('token', info.token, {
      req,
      res,
    });

    setCookie('userGoogleId', user.googleId, {
      req,
      res,
    });

    // const currentUserUrl = user.defaultUserName;
    res.redirect(process.env.NEXT_PUBLIC_URL + `/`);
  })(req, res, next);
}

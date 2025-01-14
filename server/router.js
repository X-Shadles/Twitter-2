const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/getToken', mid.requiresSecure, controllers.Account.getToken);
  app.get('/getTwits', mid.requiresLogin, controllers.Twit.getTwits);
  app.get('/getHome', mid.requiresLogin, controllers.Twit.getHome);
  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);
  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);
  app.get('/logout', mid.requiresLogin, controllers.Account.logout);
  app.post('/changePass', mid.requiresSecure, mid.requiresLogin, controllers.Account.changePass);
  app.get('/home', mid.requiresLogin, controllers.Twit.homePage);
  app.get('/maker', mid.requiresLogin, controllers.Twit.publicPage);
  app.post('/maker', mid.requiresLogin, controllers.Twit.make);
  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};

module.exports = router;

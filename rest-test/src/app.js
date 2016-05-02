import foo from './api/foo'
import home from './api/home'
import listen from './server.listen'
import secret from '../private/facebook'

let express = require('express'),
  app = express();

var port = process.env.PORT || 3000;
var secret = secret();

console.log(secret.secret);

// routes
home(app)
foo(app);




listen(app, port);

import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import cors from 'cors';
import models from './models'

const app = express();

app.use(bodyParser.json());

let port = process.env.PORT || 34567;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));


app.use(cors());

// force: true will drop the table if it already exits
// models.sequelize.sync({ force: true }).then(() => {
models.sequelize.sync().then(() => {
  console.log('Drop and Resync with {force: true}');
});

// passport middleware
app.use(passport.initialize());

// passport config
require('./config/passport')(passport);

//default route
app.get('/', (req, res) => res.send('Hello my World'));

require('./routes/user.js')(app);
require('./routes/healthcare_professionals.js')(app);
require('./routes/checklist.js')(app);
require('./routes/healthcare_facilities.js')(app);
require('./routes/principle_form.js')(app);
require('./routes/register.js')(app);
require('./routes/add_professionals.js')(app);
require('./routes/register_organisation.js')(app);
require('./routes/dependant_form.js')(app);
require('./routes/formal_sector.js')(app);	
require('./routes/formal_sector_scope.js')(app);	
require('./routes/referral_codes.js')(app);	
require('./routes/professional_service.js')(app);	
require('./routes/drug_list.js')(app);	
require('./routes/dashboard')(app);	

//create a server
var server = app.listen(port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

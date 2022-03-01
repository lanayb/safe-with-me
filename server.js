const express = require('express');
const session = require('express-session');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
// const auth = require('./utils');

const app = express();

const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret secret',
    resave: false,
    saveUninitialized: false,
  };

app.use(session(sess));


// handlebars
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('I am running on PORT http://localhost:3001'));
});

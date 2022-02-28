const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');
// const models = require('./models');
const routes = require('./controllers');
const exphbs = require('express-handlebars');

const app = express();

// routes
app.use(routes);

// handlebars
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('I am running on PORT http://localhost:3001'));
});

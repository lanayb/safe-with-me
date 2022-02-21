const User = require('./Users');
const Confession = require('./Confessions');

User.hasMany(Confession, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Confession.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = {User, Confession};


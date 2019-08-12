const Sequelize = require('sequelize');
const db = require('./db');


const Place = db.define('Place', {
   
    address: Sequelize.STRING ,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone: Sequelize.STRING,
    location: Sequelize.ARRAY(Sequelize.FLOAT)
    
});
const Hotel = db.define('Hotel', {
    name: Sequelize.STRING,
    num_stars: Sequelize.FLOAT,
    amenities: Sequelize.STRING
});
const Restaurant = db.define('Restaurant', {
    name: Sequelize.STRING,
    cuisine: Sequelize.STRING,
    price: Sequelize.INTEGER
});
const Activity = db.define('Activity', {
    name: Sequelize.STRING,
    age_range: Sequelize.STRING
});

Hotel.getHotels = function() {
    return Hotel.findAll({ include: [{ all: true }] })
}
Restaurant.getRestaurants = function() {
    return Restaurant.findAll({ include: [{ all: true }] })
}
Activity.getActivities = function() {
    return Activity.findAll({ include: [{ all: true }] })
}


Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
// db.sync();
console.log('here')    

module.exports = { Place, Hotel, Restaurant, Activity, db }
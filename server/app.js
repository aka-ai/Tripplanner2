const express = require("express");
const morgan = require("morgan");
const path = require("path");     
const app = express();
const router = express.Router();
var {
    db,
    Place,
    Hotel,
    Restaurant,
    Activity
  } = require('./models');


app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "..", "public")));


app.use('/api', async (req, res, next) => {
    const all = {}
    try {
        all.hotels = await Hotel.getHotels()
        all.Restaurant = await Restaurant.getRestaurants()
        all.Activity = await Activity.getActivities()
        res.json(all)
    } catch (error) { next(error) }
})



app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
  // handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
res.status(err.status || 500);
console.error(err);
res.send(
    // ... fill in this part
);
});

const PORT = 3000;

const init = async function() {
  //await db.sync()
  app.listen(PORT, function() {
    console.log(`Server is listening on port ${PORT}!`);
  });
}
init();
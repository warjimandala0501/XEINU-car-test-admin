const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/user', require('./routes/api/users'));
app.use('/api/scenario', require('./routes/api/scenario'));
app.use('/api/inspection', require('./routes/api/inspection'));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));

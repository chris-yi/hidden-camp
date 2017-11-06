require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");
const listings_controller = require("./controllers/listings_controller");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configure Session
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

//setup massive
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

// Configure Strategies
passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientID: process.env.AUTH_CLIENTID,
      clientSecret: process.env.AUTH_CLIENTSECRET,
      callbackURL: process.env.AUTH_CALLBACK
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      const db = app.get("db");
      const userData = profile._json;
      db.find_user([userData.identities[0].user_id]).then(user => {
        if (user[0]) {
          return done(null, user[0].user_id);
        } else {
          db
            .create_user([
              userData.name,
              userData.email,
              userData.picture,
              userData.identities[0].user_id
            ])
            .then(user => {
              return done(null, user[0].user_id);
            });
        }
      });
    }
  )
);

passport.serializeUser(function(id, done) {
  done(null, id);
});
passport.deserializeUser(function(id, done) {
  app
    .get("db")
    .find_session_user([id])
    .then(user => {
      console.log(user);
      done(null, user[0]);
    });
});

// Endpoints
app.get("/auth", passport.authenticate("auth0"));
app.get(
  "/auth/callback",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/"
  })
);
app.get("/auth/me", (req, res) => {
  if (req.user) {
    return res.status(200).send(req.user);
  } else {
    return res.status(200).send(false);
  }
});




// ****** Create ****** //
// CREATE NEW LISTING
app.post("/api/listing", listings_controller.createListing);
// CREATE NEW BOOKING
app.post("/api/booking", listings_controller.createBooking);

// ****** Get listing results ****** //
// GET ALL HOST LISTINGS (HOST)
app.get("/api/hostlistings/:id", listings_controller.getHostListings);
// GET ALL LISTINGS (USER)
app.get("/api/listings", listings_controller.getAll);
// GET LISTINGS BY ZIP
app.get("/api/listings/zip/:id", listings_controller.getByZip);
// GET LISTINGS BY STATE
app.get("/api/listings/state/:id", listings_controller.getByState);
// GET LISTINGS BY CITY
app.get("/api/listings/city/:id", listings_controller.getByCity);
// GET LISTINGS BY CATEGORY
app.get("/api/listings/category/:id", listings_controller.getByCategory);
// GET SPECIFIC LISTING USER CLICKED ON
app.get("/api/listing/:id", listings_controller.getByListingId);

// ****** Update a listing ****** //
app.put("/api/listing/:id", listings_controller.updateListing);

// ****** Delete a listing ****** //
app.delete("/api/listing/:id", listings_controller.deleteListing);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

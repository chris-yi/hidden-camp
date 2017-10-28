require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");

const app = express();
app.use(bodyParser.json());
app.use(cors());
// Configure Session
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());



// Configure Strategies
passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_CLIENTSECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
        done(null, profile);
      }
    )
  );


passport.serializeUser( function(id, done) {
    done(null, id)
})
passport.deserializeUser( function(id, done) {
    done(null, id)
})


// Endpoints
app.get("/auth", passport.authenticate("auth0"));
app.get("/auth/callback", passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/auth"
}))

// app.get("/auth/me", function(req, res) {
//     if(!req.user) {
//         return res.status(401).send("No user logged in.")
//     }
//     return res.status(200).send(req.user);
// })



const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

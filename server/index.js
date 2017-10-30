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


//setup massive
massive(process.env.CONNECTION_STRING).then( (db) => {
    app.set("db", db);
})



// Configure Strategies
passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_CLIENTSECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function(accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get("db");
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id]).then( user => {
        if(user[0]) {
            return done(null, user[0].id)
        } else {
            db.create_user([
                userData.name, 
                userData.email,
                userData.picture,
                userData.identities[0].user_id
            ]).then( user => {
                return done(null, user[0].id)
            })
        }
    })
}))


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
    failureRedirect: "http://www.google.com"
}))
app.get("/auth/me", (req, res) => {
    if(req.res) {
        return res.status(200).send(req.user);
    } else {
        return res.status(401).send()
    }
})



const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});

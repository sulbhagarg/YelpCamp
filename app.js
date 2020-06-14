// ======================
// Classic Node-Packages
// ======================
var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    flash          = require("connect-flash"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    seedDb         = require("./seeds");

// ========================================
// Setting up the environment variables.
// ========================================
var PORT           = process.env.PORT || 3000,
    URL            = process.env.DATABASEURL || "mongodb://localhost/yelp_camp";

// ==================
// Requiring routes
// ==================
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index"),
    profileRoute     = require("./routes/profile");

// ======================
// Importing the models
// ======================
var Campground     = require("./models/campground"),
    Comment        = require("./models/comment"),
    User           = require("./models/user");

// ==============================
// Connection setup to database
// ==============================
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mongodb not connected");
    console.log(error);
});

// =============================
// Body Parser for JSON format
// =============================
app.use(bodyParser.urlencoded({extended: true}));

// ===========================
// Setting up the view engine
// ===========================
app.set("view engine","ejs");

// ======================
// All the static files
// ======================
app.use(express.static(__dirname + "/public"));

// ====================
// For RESTful Routing
// ====================
app.use(methodOverride("_method"));

// ===========================
// For prompting the messages 
// ===========================
app.use(flash());

// ===============================================
// This is to seed the database for testing purpose
// ===============================================
// seedDb();    

// ===========================
// PASSPORT CONFIGURATION
// ===========================
app.use(require("express-session")({
    secret: "Here I am, with my first website.",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =============================
// Setting up the user globally
// =============================
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// ======================
// Routes specifications
// ======================
app.use("/", indexRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/profile", profileRoute);

// ==============================================
// The very important of all, PORT listener!!
// ==============================================
app.listen(PORT, function(){
    console.log("The YelpCamp Server Has Started!");
});
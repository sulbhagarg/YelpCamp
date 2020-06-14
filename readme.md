# YelpCamp

* Add Landing Page
* Add Campgrounds Page that lists all campgrounds

# Each Campground has:
* Name
* Image
This is how array will look!
[
    {name:"Salmon Creek", image: "http://www.image.com}
    {name:"Salmon Creek", image: "http://www.image.com}
    {name:"Salmon Creek", image: "http://www.image.com}
    {name:"Salmon Creek", image: "http://www.image.com}
    {name:"Salmon Creek", image: "http://www.image.com}
    {name:"Salmon Creek", image: "http://www.image.com}
]

# Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

# Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup rpute to show form
* Add basic unstyled form

# Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

# Style the Navbar and Form
* Add a navbar to all templates 
* Style the new campground form

# Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside our routes!

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

# RESTFUL ROUTES

* name    url         verb   desc.
* ==============================================
* INDEX   /dogs       GET    Display a list of all dog
* NEW     /dogs/new   GET    Displays a form to make a new dog
* CREATE  /dogs       POST   Add a new dog to DB
* SHOW    /dogs/:id   GET    Shows info about one dog

# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

# Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

# Add the Comment model
* Make our errors go away
* Display comments on campground show page

# Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

NEW       campgrounds/:id/comments/new   GET
CREATE    campgrounds/:id/comments       POST

# Style Show Page
* Add sidebar to show page
* Display comments nicely

# Auth Pt. 1 - Add User Model
* Install all the packages needed for auth
* Define user model

# Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

# Auth Pt. 3 - Login
* Add Login Routes
* Add Login template

# Auth Pt. 4 - Logout/Navbar
* Add logout route
* prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

# Auth Pt. 5 - Show/Hide Links
* Show/Hide links in navbar correctly

# Refactor The Routes
* Use Express router to reorganize all routes

# Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

# User + Campgrounds
* Prevent an unauthenticated user from creating a campground
* Save username + id to newly created campground

# Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

# Deleting Campgrounds
* Add Destroy Route
* Add Delete Button

# Authorization Part-1: Campgrounds
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

# Editing Comments
* Add Edit route for comments
* Add Edit Button
* Add Update Route

# Deleting Comments
* Add Destroy Route
* Add Delete Button

# Authorization Part-2:  Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor middleware

# Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add bootstrap alert to header
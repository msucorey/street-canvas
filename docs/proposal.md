Street Canvas

Team:
Corey Wofford
msucorey@gmail.com
https://github.com/msucorey
Brent Gummow
karmapoint@gmail.com
https://github.com/karmapoint

Background
StreetCanvas.net will be a mobile-first website that shows visitors nearby street art (murals, tags, public art, etc)  on a google map. Users will be able to visit these locations and add their own photos (and possibly likes/comments). They will also have the ability to find, photograph, and add new murals, tags, or public art pieces to the StreetCanvas collection.
Accessing the location view will show the latest photographs from that location along with a gallery of past images. Ideally, visitors will be able to see the changing canvas of that location over time as new pieces are added and old ones replaced.
Tourists can use the site to act as a walking tour of street art through different neighborhoods.
Functionality & MVP
With this website, users will be able to:
View pins of nearby locations with known street art
Add images/locations to the Street Canvas collection
View a gallery of images taken from different geographic locations
A production ReadMe of the app will be created
If time permits, the following bonus features would be implemented
HTML5 access to mobile device's camera to take photos directly from the website
Likes/Comments/Reviews system for the location view pages
Search functionality on image attributes


Wireframes


Technologies & Technical Challenges
This site will be built out using JavaScript, Node.js/Express, MongoDB, HTML, and CSS, integrating the Google Maps API. In addition to the manifest.json and package.json files, there will be several scripts:
view.js: Will describe data for the current view based on the user’s session (where they are in the site, which city)
photo.js: Describes additional information loaded for photo “in focus” and caches information into the session for recent and popular photos.
navigator.js: Contains logic that describes the “street fair” metaphor of the site - Navigator state will be used for conditional rendering of items on each of the site’s main views (described below).
Additional libraries to assist with other parts of the application (subject to change):
http://photoswipe.com/ - for photo galleries.
https://dev.w3.org/geo/api/ - Geolocation API
There will also be several HTML files to display the content across three main views:
new_style.css: the file containing the styling rules for recoloring
options.html: the file that renders the Settings menu for the user
Map page: a Google Maps view of your city with pinned content locations
View page: publicly accessible page where anyone can view recent photos and see a timeline stream of others in the gallery
Add page: logged in users can upload photos (or access from their camera) and then add additional descriptive information, tags, etcs.
The primary technical challenges will be:
Learning and deploying technologies not previously studied as part of the curriculum (namely Node.js and MongoDB),
Ensuring seamless retrieval and display of information (geotagged photos) from the back end to the front via the Google Maps API
Creating a compelling user experience that would attract a critical mass user base for the site to gain traction and become self sustaining with a continuous stream of attractive content from loyal users
Initial population of the site will be with dummy seed data and just two user accounts (Brent and Corey!) but will quickly transition into volunteer classmates with real geotagged photos of street art here in downtown San Francisco.
Group Members & Work Breakdown
Our group consists of two members, Brent Gummow and Corey Wofford.
Brent's primary responsibilities will be:
Infrastructure
CSS
UI/UX
Writing the repo's README, complete with screenshots and code snippets
Corey's primary responsibilities will be:
Database management
Google Map API integration
Back end architecture
Testing
Implementation Timeline
Day 1 (Scaffolding):
Scaffolding
Basic layout and placeholder content
Auth
Get started on infrastructure by following http://mern.io/ MERN v2.0 - “Build production ready universal apps easily”. By the end of the day, we will have:
Project skeleton built (Brent)
User authorization and account management (Corey)
Site live at heroku (later at StreetCanvas.net) (Brent)
Day 2 (Maps):
Integrate geolocation and position display functionality by integrating Google Maps API. By the end of the day, we will have:
Google Maps API integrated into the project with callbacks and extensions threaded through appropriate class files and modules (Corey)
Dummy seed data populated allowing for complete testing of the API (Corey)
A “Map” page built out that leverages API functionality for display (Brent)
Hooks ready for next stage of project allowing upload of new geodata (both)
Day 3 (Photos): Dedicate this day to completing remaining photo functionality to include uploading, tagging, commenting, and display. By the end of the day:
Build out and style a “View” page with necessary user controls and interaction (Brent)
Complete user interface allowing users that are logged in to upload photos, delete photos, tag photos, and comment on photos (both)
Implement basic search functionality (Corey)
Day 4 (Style): With the functionality completed, focus will shift to making sure styling is consistent across the site, that the site is attractive and provides a positive user experience, and that the user interface is friendly and intuitive. By the end of the day:
Finalize a constrained color palette and “bake in” using a global variable scheme (Brent)
Add “splash” to the landing page, bringing the presentation (“wow” factor) up to standards expected in sites dedicated to art and aesthetic (both)
Ensure basic requirements are met for a “mobile first” design approach as well as key accessibility considerations for select user groups (both)
Add in CSS media queries to begin optimization for (or simplification to) other display types (Corey)
Day 5 (Final Integration Testing): Begin (if not already started) upload of actual geotagged photos of street art and validate full user interface and all remaining user stories and site states. By the end of the day:
Set up github pages (Corey)
A detailed README (Brent)
Mock up wireframes for how the demo page will look (Brent)
Grab nice looking screenshots for external communications and PR (Brent)
Make a few gifs that shows off key features (Corey)
Plan for getting users and photos
Both Brent and Corey will share with at least 10 classmates who will live in or frequent downtown San Francisco over the weekend of April 8/9 and ask that they each upload at least one public photo (preferably germane to the site, i.e. street art, but otherwise anything geotagged for testing)

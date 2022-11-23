# sfiiCharacterSheet

<h1>Purpose</h1>
The purpose of this page is to provide users with knowledge about each usable character in the classic arcade game Street Fighter II Turbo Hyper Fighting.

---

<h2>Set Up</h2>

There are a few dependencies that will need to be installed in order to run my project. First you will need to download and install the appropriate version of Node.js and npm; instructions can be found [here](https://www.guru99.com/download-install-node-js.html). Then use the command line or terminal in vscode to type 'npm i' without quotes, and follow with each of these entries individually to install:

* express
* nodemon
* cors
* body-parser
* mongoose
* mongodb
* dotenv

--Note node_modules has been ignored from the commit to save on filesize, when installing node you should get those modules automatically.

After everything is installed, go to the package.json file and make sure that devStart is in quotes underneath "scripts". Enter 'npm run devStart' into the terminal/command line without quotes to start the server and establish a connection with the database.

The express server will be listening on port 3000.

---

<h2>Basic Features</h2>
The banner/header image is what is shown on the screen upon launching the actual game. Scrolling down the presentation is similar to the character select screen in the game, where if you mouse over any of the portraits, the character has the player-select over effect applied, and the flag for their country of origin is colored in.

I set up an API to send and retrieve data to/from a MongoDB/Atlas cloud database. The retrieved data is displayed in a table that can be seen whenever a character icon on the main page is clicked on. To close the modal, you can either click the "close" button at the bottom left of the modal window, or click outside of the modal to exit as well.

---

<h2>Feature List</h2>

<h3>From Section 1:</h3>

>Use arrays, objects, sets or maps to store and retrieve information that is displayed in your app.

My project implements arrays and objects in a couple of ways -- The JSON data that I've retrieved from my API I then loop over the resulting json objects with a forEach loop to populate a table of data inside a pop-up modal (activated my clicking a character portrait on the main page). I also loop through an array with a for loop to distribute images to the gallery/character select icons, as well as to the portrait images that appear inside the popup modal, and to the map images that colorize the selected character's flag (based on the images' indexes).  

>Visualize data in a user friendly way. (e.g. graph, chart, etc)

At the bottom of my page I've implemented a chart (via chart.js) that displays character popularity amongst a sample size of users on Event Hubs and displays the results in percentages of a pie graph.

<h3>From Section 2:</h3>

>Retrieve data from a third-party API and use it to display something within your app.

I built an API to store json data regarding character data, and sent it to my database with the help of Postman. That data is sent to a table that is located in the modal, appearing when a character portrait from the main page is clicked on.

<h3>From Section 3:</h3>

>Interact with a database to store and retrieve information (e.g. MySQL, MongoDB, etc).

I am utilizing MongoDB to store and retrieve data, specifically the data featured in the table on the modal popup.

// import path to later serve up the public folder and everything inside of it
const path = require('path');

// import Express 
const express = require('express');
//Create a new instance of Express
const app = express();

// tell Express to serve up the public folder and everything inside of it
const publicPath = path.join(__dirname, '..', 'build');
app.use(express.static(publicPath));

// Make sure your index.html file is served, in case the user requests a resource currently not in the public folder
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

// tell which port to use on local -> 3000 or Heroku will assign a port for the app after deploying it
const port = process.env.PORT || 3001;

// Start the server
app.listen(port, () => {
   console.log('Server is up!');
});

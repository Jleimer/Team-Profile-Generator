const fs = require('fs');
const manager = require('./lib/Manager');
function generatePage(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
  <div class="card-deck">
    <div class="custom-card col-2">
    <div class="card-header">
       <h3 class="card-title">${data.name}</h3>
       <h4 class="card-title">Manager</h4>
     </div>
     <div class="card-body">
       <p class="card-text">Employee ID: ${data.id}</p>
       <p class-"card-text">Email Address: ${data.email}</p>
       <p class="card-text">Office Phone: ${data.office}</p>
     </div>
   </div>
  </div>
         
</body>
</html>`}

module.exports = generatePage;
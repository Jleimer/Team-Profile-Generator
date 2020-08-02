const fs = require('fs');

function generatePage(data) {
    return `
    <div class="card-deck">
        <div class="card col-2">
          <div class="card-body">
            <h4 class="card-title">${data.name}</h4>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>`
}
module.exports = generatePage;
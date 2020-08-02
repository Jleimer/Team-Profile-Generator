const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./Profile');
const employee = require('./lib/Employee');
const promptUser =
    [
      {
        type: 'input',
        name: 'name',
        message: 'What is your employees name?',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your employee name!');
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the employees ID number?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your ID!')
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email!')
            }
        }
      }]

      function writeToFile(data) {
        return fs.writeFileSync(data)
      };

      function init() {
        inquirer.prompt(promptUser).then(userResponses=> {
            console.log(userResponses);
            writeToFile('./index.html', generatePage({...userResponses}));
        })}

init();
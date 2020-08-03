const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('../Profile');
const employee = require('../lib/Employee');
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
      },
      {
        type: 'input',
        name: 'office',
        message: 'Office phone number?',
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log('Please enter your phone number!')
          }
      } 
      }]

      function writeToFile(path, data) {
        return fs.writeFileSync(path, data)
      };

      function init() {
        inquirer.prompt(promptUser).then(userResponses=> {
            console.log(userResponses);
            writeToFile('../dist/index.html', generatePage({...userResponses}));
        })}

init();
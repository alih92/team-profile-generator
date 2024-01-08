const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const engineerQuestions = [{
  type: 'input',
  name: 'engineerName',
  message: 'Insert engineer name'
},
{
  type: 'input',
  name: 'engineerId',
  message: 'Insert employee ID'
},
{
  type: 'input',
  name: 'engineerEmail',
  message: 'Insert engineer email'
},
{
  type: 'input',
  name: 'engineerGithub',
  message: 'Insert engineer GitHub username'
}]

const internQuestions = [{
  type: 'input',
  name: 'internName',
  message: 'Insert intern name'
},
{
  type: 'input',
  name: 'internId',
  message: 'Insert intern ID'
},
{
  type: 'input',
  name: 'internEmail',
  message: 'Insert intern email'
},
{
  type: 'input',
  name: 'internSchool',
  message: 'Insert intern School name'
}]

const managerQuestions = [{
  type: 'input',
  name: 'managerName',
  message: 'Insert Manager name'
},
{
  type: 'input',
  name: 'engineerId',
  message: 'Insert Manager ID'
},
{
  type: 'input',
  name: 'engineerEmail',
  message: 'Insert Manager email'
},
{
  type: 'input',
  name: 'managerOfficeNumber',
  message: 'Insert Manager office number'
}]

# kdci-automation
Test Automation for Webmaps & SNOAA

Project Setup

Install the versions of Node.js and npm as indicated in the package.json engines field.

Verify that you are running Node.js required versions and npm by running node -v and npm -v in a terminal/console window.
Navigate to this project directory in a terminal/console window then run npm run setup to install all dependencies.

Initialize a new Node.js project:

`npm init -y`

Install Cypress as a dev dependency:
`npm install cypress --save-dev`

Open Cypress and Create a Test

Once Cypress is installed, you can open the Cypress Test Runner with the following command:

`npx cypress open`

This command will launch the Cypress Test Runner, and it will create a cypress directory in your project with sample test files

For this repo, the sample cypress test is inside the cypress/e2e directory, you can run the sample test using the below command:
`npx cypress run --headed`


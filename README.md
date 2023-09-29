# kdci-automation
Test Automation for Webmaps
Create a new project directory for your Cypress POC:

bash
Copy code
mkdir cypress-poc
cd cypress-poc
Initialize a new Node.js project:

bash
Copy code
npm init -y
Install Cypress as a dev dependency:

bash
Copy code
npm install cypress --save-dev
Step 2: Open Cypress and Create a Test

Once Cypress is installed, you can open the Cypress Test Runner with the following command:

bash
Copy code
npx cypress open
This command will launch the Cypress Test Runner, and it will create a cypress directory in your project with sample test files.

In the Cypress Test Runner, click the "Run all specs" button to execute the sample tests. You'll see Cypress open a browser and run the tests.

Step 3: Create a Simple Test

To create your own test, navigate to the cypress/integration directory in your project. This is where you'll write your test files.

Create a new test file, for example, example.spec.js, and add the following content:

javascript
Copy code
describe('My First Cypress Test', () => {
  it('Visits the Cypress website', () => {
    cy.visit('https://www.cypress.io/');
    cy.contains('Download for Mac').should('be.visible');
  });
});
This test visits the Cypress website and checks if the "Download for Mac" button is visible.

Save the test file.

Step 4: Run Your Test

In the Cypress Test Runner, you should see your new test file listed. Click on it to run the test.

Cypress will open a browser, navigate to the Cypress website, and perform the test.

You can watch the test execution in real-time in the Cypress Test Runner. If there are any failures, Cypress will provide detailed error messages.

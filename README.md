# event-app.wt_cw2

Github repo: https://github.com/Iminokhun/event-app.wt_cw2.git
Deploy Link: https://event-app-70cf.onrender.com

Event app add important information to your customised events, such as the date, location, and description.
Easily see and access prior events as well as those that are coming ahead for effective preparation.
Update event details in a seamless manner to ensure that all information is correct and current.
They may take control and flexibility in event administration by deleting events they've established.


This programme ensures a seamless and efficient planning process by acting as a comprehensive tool for event organisation.


1. Clone the Repository:
    Clone the repository containing the application code from the version control system (e.g., GitHub) to your local machine.

2. Install Dependencies:
    Navigate to the project directory in your terminal.
    Install the necessary dependencies by running the following command: npm install

3. Start the Application:
    Once the dependencies are installed, start the application by running: npm start

4. Access the Application:
    Open a web browser and visit the specified localhost port (http://localhost:3000) to access the application.

5. Interact with the Application:
    Create new events, view upcoming and past events, update event details, and delete events as needed within the application interface.

By following these steps, you can successfully run the Event Planning Application locally on your machine.


Application dependencies’ list:

npm init -y
npm i express express-validator pug body-parser nodemon

 * Express- is a Node.js web application framework that makes web application development easier.
 * Express- Validator express middleware for verifying incoming request data.
 * Pug- A template engine that makes HTML production easier for Node.js apps.
 * Body-Parser- A middleware that can be found under the req.body property that is used to parse incoming request   bodies in a middleware before your handlers.
 * Nodemon- An programme that improves the development workflow by tracking modifications made to your application and immediately restarting the server upon detection of such changes.

Project structure – files of the application:

/CW2_00013174: This is the main directory of the event application, and its name usually matches the project's name.

app.js: This file serves as the entry point of the application.

package.json: This file contains the project configuration and is typically created using npm init.

.gitignore: This file specifies which files and folders should be ignored by version control, such as the /node_modules folder.

/public: This directory contains files essential for building the user interface on the client-side, like images, JavaScript files, and stylesheets.

/routes: Route files define the controllers or handlers for specific route groups in the application.

/views: This folder typically contains template files (Pug templates) for rendering the views of the application.

/controllers: The controller files contain the logic for handling actions based on the routes defined in the event application.

/services/event/index.js: Service layer logic is stored in this directory, specifying which services will be used to handle actions in the application.

/validators/event/index.js:  validator functions from the validators files as needed to validate user input or other data.
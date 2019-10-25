----------------------------------
SQL Playground Application
----------------------------------

A single page React web application that allow for practicing with a disposable SQL Database

System Requirements
----------------------------------
  - Unix/Linux operating system or virtual machine
  - Node.js version 10 or higher
  - NPM (latest version)

Installation and Setup
----------------------------------
  - All program files are located in the 'sql-app' directory
  - From your terminal, navigate to the server directory of this application
  - Install all of the required dependencies by issuing this command:
    - npm install

Application Operation
----------------------------------
  - To run this React app in development/test mode, issue the following command
    - npm start
    - This will start a web server on port 3000 and load the app in your browser
  - To deploy or run this in static mode, issue the following command
    - num run build
    - This will create a folder called 'build' which will contain static files
    - Copy these to your web server (index.html will be the root file for the site)
    - Or, if you have it installed, run live-server in the build folder
  - Once running, open the website in your browser

Application Usage
----------------------------------
  - The application will pre-load an in memory database of shapes and colors
  - You may run any standard SQL commands against this database to query it.
    - SELECT, INSERT, DELETE
  - As you run commands, both the tabular list of records and the visuals shapes will refresh instantly, giving you feedback on your operation.
  - Errors will be noted.


Application Notes
----------------------------------
To keep things small and easy to manage/deploy for students' shared operation, I chose to do an in-memory React application so that we can avoid the overhead of maintaining an actual SQL database, including security, networking, etc.

This simplistic system is small enough in size to load in the browser, and doesn't involve a server or any actual data. All queries are "real" but run in a simulated environment.

Ref: ALSQL - https://github.com/agershun/alasql/wiki

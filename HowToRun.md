## Introduction
This project was made with Angular V13 for the Frontend, as API i used json-server to be easier to run the project and to avoid potential errors, but not losing efficiency.

###  How To run the project:
* Open the json server folder and the library_system folder in vsCode terminals (or prompt/ Windows Terminal/ Windows powershell, ect.)
* In the library_system folder type on terminal: 'npm i' 
It will install all dependencies used in the project.

#### To run json-server:
In the terminal where the json-server folder is open, run the script: json-server --watch db.json

* If it returns an error because json-server is not installed, run the script: npm install -g json-server
* By default, the port used is 3000, the same port being used in the services folder in library_system to connect with the frontend 

#### To run library_system:
Must have to be installed in computer: NodeJS, Angular Material, Angular/CLI
* To install nodeJS: <https://nodejs.org/en/download/>
* To install Angular/Material run this script in the terminal of library_system: ng add @angular/material
* To install Angular/CLI, run this script in the terminal outside  the terminal where the application is open: npm install -g @angular/cli


In the terminal where the library_system folder is open run the script: ng s --open 
This will open the page in the browser, or just type 'ng s' in the terminal and put it in the browser: http://localhost:4200/

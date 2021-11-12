# React_Examples

This project will allow you to switch quickly between lecture examples, breakout exercises, etc without cloning multiple projects. 
The folder structure of the Base react app has been altered slightly. 
1. A new App/ folder has been created inside /src
2. index.js now imports App from './App/App';
3. There are two new folders inside /base: /scripts and /projects.
 
## Installation
1. npm install as normal
2. Mac users - command line from inside base/ folder, run: chmod +x scripts/*
3. npm start from inside base/ will run the selected project
4. ./load while the localhost is running will switch the running app 
 

## Scripts
**to run scripts - command line from inside scripts folder, run the script preceded by "./"  This will auto-complete with TAB**
./load - copies contents of project/'project name' into base/src/App/ folder\ **have to type the project name completely and correctly. Does NOT autocomplete with TAB**
./save - saves contents of base/src/App/ folder into project/'project name' folder (only necessary if you make changes)\ **this will save automatically if the folder includes a proj/"name of project"**
./create - creates new project/'project name' folder, saves contents of current base/src/App/ folder into it\ **creates proj/'project name' to allow saving**

## Project Folders
The project/ folders contain only the contents of the App/ folder for that project, and eventually a README for the project/

### Projects:
1. base (simple base app for creating new projects)
2. intro
3. second_app
4. admin_page
5. auth_routes
6. bootstrap_react
7. dynamic_nested_routing
8. exercise_bootstrap
9. history_object
10. hooks
11. hp_character_page
12. menu_app
13. recipe_app
14. refresher_1
15. routing_example


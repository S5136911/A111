# Chatroom
## Git repository
I used Github to help me with the Chatroom project，Git provides great version control for developing the projectfirst I used the README to list some key information. I often use Github for backup because angular files are too big. In development it is often necessary to set up the back end and the front end separately to ensure that each part is correct and does not affect the whole. This allows my code to be completely free of some errors, and the idea of distribution ensures that development takes too long to be efficient and parallel，The primary consolidation problem has solved many problems with using a lot I include finishing can accurately when the range of each part, no copy more no copying and less interface call like this work to do and the definition of fault tolerance rate is very low if development for a long time need manual merge many times lead to the low work efficiency, making with accurate and very quickly. 
## Data structures 
Models are used in both the client and server sides of the project.The exactly model reflection created on both sides
### Users:


•	username: string (PK)
•	email: string // user email address
•	groupList: string[]  // indicate which groups user belongs to.
•	adminGroupList: string[]   // indicate which groups this user created.
•	ofGroupAdminsRole: Boolean  // indicate if this user is a group admin

### Group:

•	id:integer // auto sequential numbers for group id (PK)
•	name:string // group name
## Angular architecture: components, services, models, routes.

### Components:
• login :
 login page for Verify that the user name and password are correct,	If the correct user can go to the chat page
• logout :
If the user clicks on this Page the user will not be able to use any functionality and return to the Login Page
• list-group ：
You can add and remove groups and if you click on groups you can go to the channel page

• list-user ：
Users can be added and removed
• chat：
Users chat on this page
• channel：
You can add and remove channel and if you click on channels you can go to the chat page


• profile:
Users can upload photo


### Services:
• user.service.ts : 
Function for user page
• channel.service.ts:
Function for channel page 
• group.service.ts:
Function for group page




### Models:
•	group.ts
•	user.ts

### Routes:
 { path: "add-group", component: AddGroupComponent },
  { path: "add-user", component: AddUserComponent },
  { path: "add-channel", component: AddChannelComponent },

  { path: "update-user/:id", component: UpdateUserComponent },
  { path: "update-group/:id", component: UpdateGroupComponent },
  { path: "update-channel/:id", component: UpdateChannelComponent },

  { path: "list-group", component: ListGroupComponent },
  { path: "list-user", component: ListUserComponent },
  { path: "list-channel", component: ListChannelComponent },

  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent }
 ## Node server architecture: 
modules, functions, files, global variables.

### modules:
•	"body-parser": "^1.19.0",
•	"cors": "^2.8.5",
•	"express": "^4.17.1",
•	"fs": "0.0.1-security"
•	"mongodb": "^3.3.1",
•"body-parser": "^1.19.0",
     

### API functions:

Group:
• GET /api/groups  : Route to get list of all group from the database.
• GET /api/groups/:id : Route to get a single group
• POST /api/groups : check for duplicate id's
• DELETE /api/groups/id :Route to delete a single group


User:

• GET /api/users : Route to get list of all users from the database.
• GET /api/users/:username : Route to get a single item
• DELETE /api/users/:username: Route to delete a single item
•api/users/checkuser:check for duplicate id's
•api/users/add: Route to manage adding a user

Channel:
• GET /api/ Channel  : Route to get list of all Channel from the database.
• GET /api/ Channel /:id : Route to get a single Channel
• POST /api/ Channel : check for duplicate id's
• DELETE /api/ Channel /id :Route to delete a single Channel

、

Files

•	groups.json
•	users.json

## Divided the responsibilities between client and server 

### Server:

REST API return JSON data for group and user data manipulation and the fs module is used to read and write JSON formatted information into files.

### Client:

To give user frontend interface and functionalities then send the requests back to the backend for data manipulation, display the response back with built-in business logic in it.
## A list of routes, parameters, return values, and purpose in the sever side.
### Group:

URL: /api/groups

METHOD: GET
RETURN: [{"id":1,"name":"g1"},{"id":2,"name":"g2"},{"id":3,"name":"g3"}]

URL: /api/groups

METHOD: POST
Input Parameter: {"name":"g4"}
RETURN: {"id": 4, "name": "g4"}

URL: /api/groups/:id

METHOD: DELETE
Input Parameter: /api/groups/4
RETURN: {"success": true}

### User:

URL: /api/users
METHOD: GET
RETURN: [{"username":"","email":"@com.au","groupList":[],"adminGroupList":["1","2"],"ofGroupAdminsRole":true},{"username":"teena","email":"teena@com.au","groupList":["2","1"],"adminGroupList":[],"ofGroupAdminsRole":false]

URL: /api/users/:username

METHOD: GET
Input Parameter: /api/users/teena
RETURN: {
    "username": "",
    "email": "@com.au",
    "groupList": [
        "2",
        "1"
    ],
    "adminGroupList": [],
    "ofGroupAdminsRole": false
}





URL: /api/users/:username
METHOD: PUT
Input Parameter: /api/users/holly
RETURN: 
{
    "isSuccess": true
}
## Describes the details of the interaction between the client and server

Use MongoDB to store and provide information for back-end nodes, and read and write JSON files by Webserver through Node's FS module
With the computer. The node server then provides the REST API to the front end in response in JSON format. Angular has data services that complete the CRUD of the data model and render the information as HTML in every component of an Angular project


![avatar](https://sites.google.com/site/bestmeanstacktraining/home/meanj.jpg?attredirects=0)

 


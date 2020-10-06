const express = require('express'); // Import exprerss.js
const app = express(); //The app object conventionally denotes the Express application. Create it by 
const http = require('http').Server(app);
const bodyParser = require('body-parser'); //create an instance of body-parser
const cors = require('cors'); //allow Cross site origin requests
const MongoClient = require('mongodb').MongoClient; // require MongoClient functionality
var ObjectID = require('mongodb').ObjectID; //require ObjectID functionality
const io = require('socket.io')(http);
const sockets = require('./socket.js');
const path = require('path');
console.log(__dirname);
app.use(express.static(path.join(__dirname, '../dist/imageupload/')));
app.use('/images', express.static(path.join(__dirname, './userimages')));



app.use(cors());
app.use(bodyParser.json()); //Mounts the specified middleware function
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, { poolSize: 10, useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    //Callback function code. When we have a connection start the rest of the app.
    if (err) { return console.log(err) }
    const dbName = '3813A1';
    const db = client.db(dbName);
    sockets.connect(app, io, db);

    require('./routes/users/api-add.js')(db, app);
    require('./routes/users/api-check.js')(db, app, ObjectID);
    require('./routes/users/api-deleteitem.js')(db, app, ObjectID);
    require('./routes/users/api-getitem.js')(db, app, ObjectID);
    require('./routes/users/api-getlist.js')(db, app);
    require('./routes/users/api-update.js')(db, app, ObjectID);


    // require('./routes/api/login')(app);
    require('./routes/groups/api-add.js')(db, app);
    //require('./routes/api-prodcount.js')(db,app);
    // require('./routes/groups/api-validid.js')(db, app);
    require('./routes/groups/api-getlist.js')(db, app);
    require('./routes/groups/api-getitem.js')(db, app, ObjectID);
    require('./routes/groups/api-update.js')(db, app, ObjectID);
    require('./routes/groups/api-deleteitem.js')(db, app, ObjectID);

    // require('./routes/api/login')(app);
    require('./routes/channels/api-add.js')(db, app);
    //require('./routes/api-prodcount.js')(db,app);
    // require('./routes/groups/api-validid.js')(db, app);
    require('./routes/channels/api-getlist.js')(db, app);
    require('./routes/channels/api-getitem.js')(db, app, ObjectID);
    require('./routes/channels/api-update.js')(db, app, ObjectID);
    require('./routes/channels/api-deleteitem.js')(db, app, ObjectID);

    require('./routes/users/api-upload.js')(db, app);

    //Start the server listening on port 3000. Outputs message to console once server has started.(diagnostic only)
    require('./listen.js')(http);

});
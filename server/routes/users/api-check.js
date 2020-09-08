module.exports = function(db, app, ObjectID) {

    app.post('/api/users/checkuser', function(req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }
        username = req.body.username;
        password = req.body.password;
        console.log(username);
        console.log(password);

        const collection = db.collection('users');
        //check for duplicate id's
        collection.find({ 'email': username, 'password': password }).count((err, count) => {
            console.log("count::" + count);
            if (count == 0) {
                res.send({ success: 0 });
            } else {
                collection.find({ 'email': username }).limit(1).toArray((err, data) => {
                    res.send({ success: 1 });
                    // res.send(data);
                });
            }
        });
    });
}
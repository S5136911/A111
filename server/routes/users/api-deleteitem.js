module.exports = function(db, app, ObjectID) {
    //Route to delete a single item

    app.post('/api/users/deleteitem', function(req, res) {

        if (!req.body) {
            return res.sendStatus(400);
        }

        userID = req.body.userID;
        console.log('userid' + userID);
        //create a new mongo Object ID from the passed in _id
        objectid = new ObjectID(userID);
        const collection = db.collection('users');
        //Delete a single item based on its unique ID.
        collection.deleteOne({ _id: objectid }, (err, docs) => {
            res.send({ ok: 1 });
        })
    })

}
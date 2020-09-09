module.exports = function(db, app, ObjectID) {
    //Route to get a single item

    app.post('/api/users/getitem', function(req, res) {


        if (!req.body) {
            return res.sendStatus(400)
        }

        userID = req.body.userID;
        //Create objectID from passed in+id
        var objectid = new ObjectID(userID);
        const collection = db.collection('users');
        collection.find({ _id: objectid }).limit(1).toArray((err, docs) => {
            //send to client and array of items limited to 1.
            console.log(docs);
            res.send(docs);
        })

    })

}
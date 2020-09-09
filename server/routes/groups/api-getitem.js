module.exports = function(db, app, ObjectID) {
    //Route to get a single item

    app.post('/api/groups/getitem', function(req, res) {


        if (!req.body) {
            return res.sendStatus(400)
        }

        groupId = req.body.groupId;
        //Create objectID from passed in+id
        var objectid = new ObjectID(groupId);
        const collection = db.collection('groups');
        collection.find({ _id: objectid }).limit(1).toArray((err, docs) => {
            //send to client and array of items limited to 1.
            console.log(docs);
            res.send(docs);
        })

    })

}
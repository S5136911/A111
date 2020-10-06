module.exports = function(db, app, ObjectID) {
    //Route to delete a single item

    app.post('/api/channels/deleteitem', function(req, res) {


        if (!req.body) {
            return res.sendStatus(400);
        }

        channelId = req.body.channelId;
        //create a new mongo Object ID from the passed in _id
        var objectid = new ObjectID(channelId);
        const collection = db.collection('channels');
        //Delete a single item based on its unique ID.
        collection.deleteOne({ _id: objectid }, (err, docs) => {
            res.send({ ok: 1 });
        })
    })

}
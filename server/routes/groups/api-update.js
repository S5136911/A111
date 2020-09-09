module.exports = function(db, app, ObjectID) {
    //Route to delete a single item
    var result;
    app.post('/api/groups/update', function(req, res) {
        console.log('hi222');
        if (!req.body) {
            return res.sendStatus(400)
        }
        group = req.body;
        //console.log(req);
        var objectid = new ObjectID(group.objid);
        const collection = db.collection('groups');
        collection.updateOne({ _id: objectid }, { $set: { name: group.name } }, () => {
            //Return a response to the client to let them know the delete was successful
            res.send({ 'ok': group.objid });
        })

    });


}
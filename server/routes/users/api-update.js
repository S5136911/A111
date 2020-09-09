module.exports = function(db, app, ObjectID) {
    //Route to delete a single item
    // var result;
    app.post('/api/users/update', function(req, res) {

        if (!req.body) {
            return res.sendStatus(400)
        }
        user = req.body;
        //console.log(req);
        var objectid = new ObjectID(user.objid);
        const collection = db.collection('users');
        collection.updateOne({ _id: objectid }, { $set: { name: user.name, email: user.email, role: user.role } }, () => {
            //Return a response to the client to let them know the delete was successful
            res.send({ 'ok': user.objid });
        })

    });


}
module.exports = function(db, app) {
    //Route to manage adding a group

    app.post('/api/groups/add', function(req, res) {


        if (!req.body) {
            return res.sendStatus(400)
        }

        group = req.body;
        const collection = db.collection('groups');
        //check for duplicate id's
        collection.find({ 'id': group.id }).count((err, count) => {
            if (count == 0) {
                //if no duplicate
                collection.insertOne(group, (err, dbres) => {

                    if (err) throw err;
                    let num = dbres.insertedCount;
                    //send back to client number of items instered and no error message
                    res.send({ 'num': num, err: null });
                })
            } else {
                //On Error send back error message
                res.send({ 'num': 0, 'err': "duplicate item" });
            }
        });
    });


}
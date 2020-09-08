module.exports = function(db, app) {
    //Route to manage adding a product

    app.post('/api/users/add', function(req, res) {

        if (!req.body) {
            return res.sendStatus(400)
        }

        user = req.body;
        console.log(user);
        user.password = "123";
        console.log(user);

        const collection = db.collection('users');
        //check for duplicate id's
        collection.find({ 'id': user.id }).count((err, count) => {
            if (count == 0) {
                //if no duplicate
                collection.insertOne(user, (err, dbres) => {

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
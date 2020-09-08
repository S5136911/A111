module.exports = function(db, app) {
    //Route to get list of all items from the database.

    app.get('/api/users/getlist', function(req, res) {

        const collection = db.collection('users');
        collection.find({}).toArray((err, data) => {
            console.log(data);
            res.send(data);
        })
    })
}
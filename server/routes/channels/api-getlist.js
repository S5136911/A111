module.exports = function(db, app) {
    //Route to get list of all items from the database.

    app.get('/api/channels/getlist', function(req, res) {

        const collection = db.collection('channels');
        collection.find({}).toArray((err, data) => {

            res.send(data);
        })
    })
}
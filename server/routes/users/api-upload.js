module.exports = function(db, app) {
    const formidable = require('formidable');
    app.post('/api/upload', (req, res) => {

        var form = new formidable.IncomingForm({ uploadDir: './userimages' });
        form.keepExternsions = true;

        form.on('error', function(err) {

            throw err;

            res.send({
                result: "failed",
                data: {},
                numberOfImages: 0,
                message: "cannot upload images. error is  :" + err
            });

        });

        /* this is where the renaming happens */
        form.on('fileBegin', function(name, file) {
            //rename the incoming file to the file's name
            file.path = form.uploadDir + "/" + file.name;
        });

        form.on('file', function(field, file) {
            res.send({
                result: 'OK',
                data: { 'filename': file.name, 'size': file.size },
                numberOfImages: 1,
                message: "upload successful"
            });
        });

        form.parse(req);
    });
}
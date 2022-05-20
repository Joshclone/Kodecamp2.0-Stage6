const { crudOperation } = require('../models/Post');
function showError(err) {
    if (err) console.log(err);
  };

function profile(req, res, next) {
    crudOperation.find({}, '', function (err, records) {
        showError(err);
        res.json({
            succesful: true,
            records
        });
    });
}


function getById(req, res) {
    const userId = req.params.id;
    crudOperation.findById(userId, function (err, user) {
        showError(err);
        res.json({
            succesful: true,
            user
        });
    });
};
    

        function createPost(request, response) {
            const { name, course, year } = request.body;
            const addRecord = new crudOperation({
                name,
                course,
                year,
                createDate: Date.now()
            });

            addRecord.save(function (err, newRecord) {
                showError(err);
                response.json({
                    successful: true,
                    newRecord
                });
            });
            
        }


        function deletePost (req, res, next) {
            res.send("This is a delete request")
          };
        module.exports = { profile, getById, createPost, deletePost }
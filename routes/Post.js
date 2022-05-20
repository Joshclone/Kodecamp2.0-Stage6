const express = require('express');

//CRUD Operation handlers for the routes get and POst
const router = express.Router();
const {
  profile,
  getById,
  createPost,
  deletePost
} = require ('../controllers/controllers')

router.get('/', profile);
//router.get('/', function (req, res, next) {
  //res.send("This is a get request")
//});

router.get('/:id', getById);
router.post('/', createPost);



router.patch('/', function (req, res, next) {
  res.send("This is a patch request")
});

router.delete('/', deletePost)
module.exports = router;
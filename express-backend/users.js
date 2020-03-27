const express = require('express');
const router = express.Router();
const users = require('./dummyDatabase');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', function (req, res) {
  res.send("mhm")
})

// define the about route
router.get('/about', function (req, res) {
  res.send('users about')
})

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: users
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err
    });
  }
});

module.exports = router

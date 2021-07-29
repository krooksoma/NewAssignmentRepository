const router = require('express').Router();
const apiRoutes = require('./api');

//webpage main route directed to routes inside the api folder
router.use('/api', apiRoutes);

// what is this one doing???
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
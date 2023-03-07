const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes'); //update

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

//need to update routes
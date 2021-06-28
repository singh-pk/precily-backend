const router = require('express').Router();

const { getTotalCount } = require('../controllers/countController');

router.get('/getTotalCount', getTotalCount);

module.exports = router;

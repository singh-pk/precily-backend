const router = require('express').Router();

const { addImage, updateImage } = require('../controllers/containerController');
const { incCount } = require('../controllers/countController');

router.post('/addImage', addImage, incCount);
router.put('/updateImage', updateImage, incCount);

module.exports = router;

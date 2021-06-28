const router = require('express').Router();

const { addImage, updateImage } = require('../controllers/containerController');

router.post('/addImage', addImage);
router.put('/updateImage', updateImage);

module.exports = router;

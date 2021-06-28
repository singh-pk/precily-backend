const Container = require('../models/containerSchema');

exports.addImage = (req, res, next) => {
  // console.time('addImage');

  const { containerId, imageUrl } = req.body;

  const image = new Container({ containerId, imageUrl });

  image.save(err => {
    if (err) return res.status(400).json({ error: err });

    return res.json({ message: 'success' });
  });

  next();

  // console.timeEnd('addImage');
};

exports.updateImage = (req, res, next) => {
  // console.time('updateImage');

  const { containerId, imageUrl } = req.body;

  Container.findOneAndUpdate({ containerId }, { imageUrl }, err => {
    if (err) return res.status(400).json({ error: err });

    return res.json({ message: 'success' });
  });

  next();

  // console.timeEnd('updateImage');
};

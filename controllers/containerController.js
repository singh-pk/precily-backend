const Container = require('../models/containerSchema');
const Count = require('../models/countSchema');

function incCount() {
  return Count.findOneAndUpdate(
    { slug: 'count' },
    { $inc: { count: 1 } }
  ).exec();
}

exports.addImage = (req, res) => {
  // console.time('addImage');

  const { containerId, imageUrl } = req.body;

  const image = new Container({ containerId, imageUrl });

  image.save(err => {
    if (err) return res.status(400).json({ error: err });

    incCount();

    return res.json({ message: 'success' });
  });

  // console.timeEnd('addImage');
};

exports.updateImage = (req, res) => {
  // console.time('updateImage');

  const { containerId, imageUrl } = req.body;

  Container.findOneAndUpdate({ containerId }, { imageUrl }, err => {
    if (err) return res.status(400).json({ error: err });

    incCount();

    return res.json({ message: 'success' });
  });

  // console.timeEnd('updateImage');
};

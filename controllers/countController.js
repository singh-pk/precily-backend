const Count = require('../models/countSchema');

exports.incCount = () =>
  Count.findOneAndUpdate({ slug: 'count' }, { $inc: { count: 1 } }).exec();

exports.getTotalCount = (_, res) => {
  Count.find({ slug: 'count' }, (err, result) => {
    if (err) return res.status(400).json({ error: err });

    return res.json({ count: result[0].count });
  });
};

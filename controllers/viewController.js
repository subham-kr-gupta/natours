const catchAsync = require('../utils/catchAsync');
const Tour = require('../models/tourModel');

exports.getOverview = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).render('overview', {
    title: 'All tours',
    tours,
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tours', {
    title: 'The Forest Hiker ',
  });
};

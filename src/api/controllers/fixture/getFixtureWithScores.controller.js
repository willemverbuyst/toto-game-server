const { fixtureQueries, predictionQueries } = require('../../../db/queries');
const { asyncHandler, errorHandlers, validators } = require('../../../utils');

const { catchAsync } = asyncHandler;
const { AppError } = errorHandlers;
const { getFixtureQuery } = fixtureQueries;
const { getAllPredictionsAndScoresForFixtureQuery } = predictionQueries;
const { isValidFixtureId } = validators;

module.exports = catchAsync(async (req, res, next) => {
  const fixtureId = req.params.id;

  if (!isValidFixtureId(fixtureId)) {
    return next(new AppError('This is not a valid fixture id', 404));
  }

  const fixture = await getFixtureQuery(fixtureId);

  if (!fixture) {
    return next(new AppError('The fixture with this id was not found', 404));
  }

  const scores = await getAllPredictionsAndScoresForFixtureQuery(fixture);

  res.status(200).json({
    status: 'success',
    data: {
      fixture,
      scores,
    },
  });
});

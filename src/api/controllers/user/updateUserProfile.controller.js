const { teamQueries, userQueries } = require('../../../db/queries');
const { asyncHandler, errorHandlers, validators } = require('../../../utils');

const { catchAsync } = asyncHandler;
const {
  DetailsMissingError,
  InvalidEmailError,
  ErrorStatus404: { TeamNotFoundError },
} = errorHandlers;
const { getTeamById } = teamQueries;
const { updateUserProfileQuery } = userQueries;
const { isValidEmail, isValidUpdateProfileInput } = validators;

module.exports = catchAsync(async (req, res, next) => {
  const loggedInUserId = req.user.id;
  const {
    userName,
    firstName,
    lastName,
    email,
    phoneNumber,
    totaalToto,
    teamId,
  } = req.body;

  if (
    !isValidUpdateProfileInput(
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
      totaalToto,
      teamId,
    )
  ) {
    return next(new DetailsMissingError());
  }

  if (!isValidEmail(email)) {
    return next(new InvalidEmailError());
  }

  const team = await getTeamById(teamId);

  if (!team) {
    return next(new TeamNotFoundError());
  }

  const profile = await updateUserProfileQuery(loggedInUserId, req.body);

  res.status(200).json({
    status: 'success',
    data: {
      user: { profile },
    },
    message: 'Your profile hase been udpated.',
  });
});

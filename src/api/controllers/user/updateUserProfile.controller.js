const { userQueries } = require('../../../db_old/queries');
const { asyncHandler, errorHandlers, validators } = require('../../../utils');

const { catchAsync } = asyncHandler;
const { AppError } = errorHandlers;
const { updateUserProfileQuery } = userQueries;
const { isvalidUpdateProfileInput } = validators;

module.exports = catchAsync(async (req, res, next) => {
  const loggedInUserId = Number(req.user.id);
  const { userName, firstName, lastName, email, phoneNumber, teamId } =
    req.body;

  if (
    !isvalidUpdateProfileInput(
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
      teamId,
    )
  ) {
    return next(new AppError('Details ontbreken, probeer opnieuw!', 404));
  }

  const profile = await updateUserProfileQuery(loggedInUserId, req.body);

  res.status(200).json({
    status: 'success',
    data: {
      user: { profile },
    },
    message: 'Je profiel is gewijzigd.',
  });
});

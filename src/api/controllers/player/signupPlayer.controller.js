const { teamQueries, userQueries } = require('../../../db/queries');
const { asyncHandler, errorHandlers, validators } = require('../../../utils');
const { InvalidTeamIdError } = require('../../../utils/error/ErrorStatus422');

const { catchAsync } = asyncHandler;
const {
  ErrorStatus404: { TeamNotFoundError },
  ErrorStatus422: {
    InvalidOrMissingInputError,
    EmailAlreadyExistsError,
    InvalidEmailError,
    UserNameAlreadyExistsError,
  },
} = errorHandlers;
const { getTeamById } = teamQueries;
const { createUserQuery, getUserByEmailQuery, getUserByUserNameQuery } =
  userQueries;
const { isValidEmail, isValidSignupInput, isValidTeamId } = validators;

module.exports = catchAsync(async (req, res, next) => {
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
    !isValidSignupInput(
      userName,
      firstName,
      lastName,
      email,
      phoneNumber,
      totaalToto,
      teamId,
    )
  ) {
    return next(new InvalidOrMissingInputError());
  }

  if (!isValidEmail(email)) {
    return next(new InvalidEmailError());
  }

  const userByemail = await getUserByEmailQuery(email);

  if (userByemail && userByemail.email) {
    return next(new EmailAlreadyExistsError());
  }

  const userByUserName = await getUserByUserNameQuery(userName);

  if (userByUserName && userByUserName.userName) {
    return next(new UserNameAlreadyExistsError());
  }

  if (!isValidTeamId(teamId)) {
    return next(new InvalidTeamIdError());
  }

  const team = await getTeamById(teamId);

  if (!team) {
    return next(new TeamNotFoundError());
  }

  const newPlayer = await createUserQuery(req.body);

  delete newPlayer.dataValues.password;

  res.status(201).json({
    status: 'success',
    data: { player: newPlayer },
    message: `A new account is made for ${newPlayer.dataValues.userName}.`,
  });
});

const User = require("../../models/User");

module.exports = {
  Mutation: {
    register(
      _,
      { registerInput: { username, password, confirmPassword, email } },
      context,
      info
    ) {
      //TODO validate user data
      //TODO make sure user doesn't already exists
      //TODO hash passwords and create an auth token
    },
  },
};

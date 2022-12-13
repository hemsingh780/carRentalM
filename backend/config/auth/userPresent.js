const userPresent = (request, response, done) => {
  if (request.cookies.userToken) {
    request.headers = {
      ...request.headers,
      authorization: request.cookies.userToken,
    };

    done(null, true);
  } else {
    done(null, false);
  }
};

module.exports = userPresent;

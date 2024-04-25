// Create Token and saving in cookie

const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (message) {
    res.status(statusCode).cookie("token", token, options).json({
      message: message,
      success: true,
      user,
      token,
    });
  } else {
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      token,
    });
  }
};

module.exports = sendToken;

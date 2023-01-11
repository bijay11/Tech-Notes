const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// @description Login
// @route POST /auth
// @access Public
const login = asyncHandler(async (req, res) => {
  //
});

// @description Refresh
// @route GET /auth/refresh
// @access Public - because access token has expired
// this needs to be public because JWT or the access token has expired
const refresh = (req, res) => {
  //
};

// @description Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
  //
};

module.exports = {
  login,
  refresh,
  logout,
};

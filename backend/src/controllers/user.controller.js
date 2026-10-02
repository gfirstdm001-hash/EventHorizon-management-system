const User = require("../models/user.models");

const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      user,
    });
  } catch (e) {
    console.log(e);

    return res.status(500).json({
      message: "Internal server error",});
  }
};

module.exports = {
  getProfile,
};
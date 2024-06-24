const { Router } = require("express");
const {
  registerUser,
  showUsers,
  showUser,
  updateUserInfo,
  deleteUser,
} = require("../controllers/user.controller.js");

const router = Router();

router.route("/").post(registerUser).get(showUsers);
router.route("/:id").get(showUser).patch(updateUserInfo).delete(deleteUser);

module.exports = router;

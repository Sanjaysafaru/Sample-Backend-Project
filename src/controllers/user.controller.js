const User = require("../models/user.model.js");

const registerUser = async (req, res) => {
  const body = req.body;
  if (!body || !body.userName || !body.email || !body.password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  await User.create({
    userName: body.userName,
    email: body.email,
    fullName: body.fullName ? body.fullName : body.userName,
    password: body.password,
  });
  return res
    .status(201)
    .json({ status: "success", message: "new user created" });
};
const showUsers = async (req, res) => {
  const users = await User.find({});
  const html = `<ul>
    ${users.map((user) => `<li>${user.userName} - ${user.email}</li>`)}
    </ul>`;
  res.send(html);
};
const showUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
  return res.status(200).json(user);
};
const updateUserInfo = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ status: "error", message: "User not found" });
  }
  const body = req.body;
  if (body.userName) {
    await User.findByIdAndUpdate(
      req.params.id,
      { userName: body.userName },
      { new: true }
    );
  } else if (body.email) {
    await User.findByIdAndUpdate(
      req.params.id,
      { email: body.email },
      { new: true }
    );
  } else if (body.fullName) {
    await User.findByIdAndUpdate(
      req.params.id,
      { fullName: body.fullName },
      { new: true }
    );
  } else if (body.password) {
    await User.findByIdAndUpdate(
      req.params.id,
      { password: body.password },
      { new: true }
    );
  } else {
    return res
      .status(404)
      .json({ status: "error", message: "No updates available" });
  }
  return res
    .status(201)
    .json({ status: "success", message: "user info altered" });
};
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res
    .status(202)
    .json({ status: "success", message: "user deleted from db" });
};
module.exports = {
  registerUser,
  showUsers,
  showUser,
  updateUserInfo,
  deleteUser,
};

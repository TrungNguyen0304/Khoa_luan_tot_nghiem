const User = require("../models/user");
const bcrypt = require("bcrypt");

// Register user
const register = async (req, res) => {
  const { email, password, firstname, lastname, phoneNumber } = req.body;
  const role = req.body.role || "user";

  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      firstname,
      lastname,
      phoneNumber,
      role,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration error:", error.message);
    res
      .status(500)
      .json({ message: "Internal server error.", error: error.message });
  }
};
//login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Login attempt with email:", email);

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid email." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return res
        .status(200)
        .json({ message: "Login successful!", userId: user._id });
    } else {
      return res.status(401).json({ message: "Invalid password." });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};
// Delete user by ID
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    // Find and delete user
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Người dùng không tồn tại." });
    }
    res.status(200).json({ message: "Người dùng đã được xóa thành công." });
  } catch (error) {
    console.error("Lỗi khi xóa người dùng:", error);
    res.status(500).json({ message: "Lỗi máy chủ nội bộ." });
  }
};

module.exports = {
  register,
  login,
  deleteUser
};

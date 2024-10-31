const User = require("../models/user");
const bcrypt = require("bcrypt");

// Register user
const register = async (req, res) => {
  const { email, password, firstname, lastname, phoneNumber } = req.body;
  const role = req.body.role || "user"; 

  try {
    if (await User.findOne({ email })) {
      return res.status(400).json({ message: "Người dùng đã tồn tại." });
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

    // Save user to database
    await newUser.save();
    res.status(201).json({ message: "Người dùng đã được đăng ký thành công!" });
  } catch (error) {
    console.error("Lỗi đăng ký:", error.message);
    res
      .status(500)
      .json({ message: "Lỗi máy chủ nội bộ.", error: error.message });
  }
};

module.exports = {
  register,
};

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import thư viện cors

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối đến MongoDB
mongoose.connect('mongodb://localhost:27017/StarBucksClone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Sử dụng cors middleware để cho phép truy cập từ các domain khác
app.use(cors());

// Định nghĩa schema và model cho người dùng
const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Sử dụng body-parser để đọc dữ liệu từ request body
app.use(bodyParser.json());

// Đăng ký người dùng
app.post('/api/signup', async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Tạo một đối tượng User mới
    const newUser = new User({
      fullName,
      email,
      password,
    });

    // Lưu vào database
    await newUser.save();

    // Trả về thông báo thành công
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

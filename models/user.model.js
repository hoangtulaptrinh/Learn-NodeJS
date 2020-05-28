import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  avatar: String,
  phone: String,
});

//tham số thứ 3 là tên collection muốn lưu vào
const UserModel = mongoose.model('User', userSchema, 'users');

export default UserModel;

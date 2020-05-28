import mongoose from 'mongoose';

const familySchema = new mongoose.Schema({
  name: String,
  member: {
    name: String,
    role: String,
  },
});

//tham số thứ 3 là tên collection muốn lưu vào
const FamilyModel = mongoose.model('Family', familySchema, 'family');

export default FamilyModel;

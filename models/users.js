import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  facebookId: Number,
  githubId: Number,
});

const model = mongoose.Model('User', UserSchema);

export default model;
// 출처: https://dydals5678.tistory.com/130 [아빠개발자의 노트:티스토리]

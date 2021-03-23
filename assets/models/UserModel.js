import mongoose from 'mongoose';

const usermaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'user',
  },
  admin: {
    type: Boolean,
    default: false,
  },
  avatar_image: {
    type: String,
    default: '',
  },
  transactions: {
    bsonType: Object,
    default: {},
  },
  CPF: {
    type: String,
    default: '',
  },
  CEIpassword: {
    type: String,
    default: '',
  },
}, {
  timestamps: true,
});

const dataset = mongoose.models.usermas || mongoose.model('usermas', usermaSchema);
export default dataset;

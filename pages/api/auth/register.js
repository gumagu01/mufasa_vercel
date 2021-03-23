import bcrypt from 'bcrypt';
import ConnectDB from '../../../assets/utils/ConnectDB';
import Users from '../../../assets/models/UserModel';
import { createAccessToken, createRefreshToken } from '../../../assets/utils/GenerateToken';

ConnectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await register(req, res);
      break;

    default:
  }
};

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (user) return res.status(405).json({ emailMessage: 'Email já cadastrado' });

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = new Users({ email, password: passwordHash });

    console.log(newUser);

    await newUser.save();

    const accessToken = createAccessToken({ id: newUser._id });
    const refreshToken = createRefreshToken({ id: newUser._id });

    res.json({
      msg: 'Register Success',
      refreshToken,
      accessToken,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message, status: 500 });
  }
};

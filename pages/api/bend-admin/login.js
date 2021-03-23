import bcrypt from 'bcrypt';
import ConnectDB from '../../../assets/utils/ConnectDB';
import Users from '../../../assets/models/UserModel';
import { createAccessToken, createRefreshToken } from '../../../assets/utils/GenerateToken';

ConnectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'POST':
      await login(req, res);
      break;

    default:
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) return res.status(400).json({ emailMessage: 'Esse email não está cadastrado no sistema' });

    if (!user.admin) return res.status(400).json({ emailMessage: 'Esse email não é de administrador' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ passwordMessage: 'Senha incorreta' });

    const accessToken = createAccessToken({ id: user._id });
    const refreshToken = createRefreshToken({ id: user._id });

    res.json({
      msg: 'Login Success',
      refreshToken,
      accessToken,
      user: {
        email: user.email,
        role: user.role,
        avatar_image: user.avatar_image,
        admin: user.admin,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

// import ReiLeao from '../../ReiLeao'

import connectDB from '../../../../assets/utils/ConnectDB';
import Users from '../../../../assets/models/UserModel';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await middleWareReiLeao(req, res);
      break;
    default:
  }
};

const middleWareReiLeao = async (req, res) => {
  try {
    // const auth = await authReiLeao(req, res);
    // if (!auth.success) return auth.status(400).json({ err: 'Ação não sucedida' });

    const usersOnDB = await Users.find().select('CPF CEIpassword _id');

    res.json({
      success: 'Success',
      msg: 'Update Success',
      usersOnDB,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const authReiLeao = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(400).json({ err: 'Autenticação inválida' });

    res.json({
      success: 'Success',
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

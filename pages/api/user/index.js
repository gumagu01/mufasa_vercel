import connectDB from '../../../assets/utils/ConnectDB';
import auth from '../../../assets/middleware/auth';
import Users from '../../../assets/models/UserModel';

connectDB();

export default async (req, res) => {
  switch (req.method) {
    case 'GET':
      await getUsers(req, res);
      break;
    case 'PATCH':
      await uploadInfo(req, res);
      break;
    default:
  }
};

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = { ...this.queryString };

    const excludeFields = ['sort'];
    excludeFields.forEach((el) => delete (queryObj[el]));

    if (queryObj.role !== 'all' && queryObj.role) this.query.find({ role: queryObj.role });
    if (queryObj.search !== 'all' && queryObj.search) this.query.find({ email: { $regex: queryObj.search } });

    this.query.find();
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join('');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }

    return this;
  }
}

const getUsers = async (req, res) => {
  try {
    const result = await auth(req, res);
    if (result.role !== 'admin' && result.role !== 'master admin') return res.status(400).json({ err: 'Autenticação inválida' });

    const features = new APIfeatures(Users.find().select('-password'), req.query)
      .filtering().sorting();

    const users = await features.query;
    res.json({ users });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

const uploadInfo = async (req, res) => {
  try {
    const result = await auth(req, res);

    const { CPF, CEIpassword } = req.body;

    const newUser = await Users.findOneAndUpdate({ _id: result.id }, { CPF, CEIpassword }).select('-password');

    res.json({
      message: 'Update Success',
      user: {
        name: newUser.name,
        email: newUser.email,
        CPF,
        CEIpassword,
        role: newUser.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

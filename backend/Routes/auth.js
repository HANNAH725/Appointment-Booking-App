import express from 'express';
import jwt from 'jsonwebtoken';
import User from './models/User'; // Adjust path as necessary

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token, user: { email: user.email, id: user._id } });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;

import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    const { email, password, name, role, gender } = req.body;
    try {
        let user = null;
        if (role === 'patient') {
            console.log('Finding patient with email:', email);
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            console.log('Finding doctor with email:', email);
            user = await Doctor.findOne({ email });
        }

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                gender,
                role
            });
        } else if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                gender,
                role
            });
        }

        await user.save();
        res.status(200).json({ success: true, message: 'User successfully created' });

    } catch (err) {
        console.log('Error in register function:', err);
        res.status(500).json({ success: false, message: 'Internal server error, Try again' });
    }
};

export const login = async (req, res) => {
    try {
        // Implement login logic here
    } catch (err) {
        console.log('Error in login function:', err);
        res.status(500).json({ success: false, message: 'Internal server error, Try again' });
    }
};

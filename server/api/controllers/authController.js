import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';
import { validationResult } from 'express-validator';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_here';
const SALT_ROUNDS = 10;

const registerUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, type } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({
            name,
            email,
            password,
            role: type || 'donor',
            createdAt: new Date()
        });

        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = { user: { id: user.id, role: user.role } };

        jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' }, (err, token) => {
            if (err) throw err;
            res.status(201).json({
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error during registration' });
    }
};

const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Validation errors:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    console.log("Login attempt:", { email });

    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            console.log("No user found for email:", email);
            return res.status(400).json({ message: 'Invalid credentials: email not found' });
        }

        console.log("User found:", {
            id: user._id,
            email: user.email,
            role: user.role,
            hashedPassword: user.password,
        });

        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials: password mismatch' });
        }

        const payload = { user: { id: user.id, role: user.role } };

        jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' }, (err, token) => {
            if (err) {
                console.error("JWT signing error:", err);
                return res.status(500).json({ message: 'Token generation failed' });
            }

            console.log("Login successful for:", email);
            res.json({
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
        });
    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).json({ message: 'Server error during login' });
    }
};


const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error while fetching user' });
    }
};

const updateUser = async (req, res) => {
    const { name, email, currentPassword, newPassword } = req.body;

    try {
        const user = await User.findOne({ email }).select('+password');;
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (newPassword) {
            const isMatch = await bcrypt.compare(currentPassword, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Current password is incorrect' });
            }
            const salt = await bcrypt.genSalt(SALT_ROUNDS);
            user.password = await bcrypt.hash(newPassword, salt);
        }

        if (name) user.name = name;
        if (email) user.email = email;

        await user.save();

        res.json({
            message: 'Profile updated successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: 'Server error during login' });
    }
};

export {
    registerUser,
    loginUser,
    getUser,
    updateUser
};

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/model"); 
require('dotenv').config();
const { AuthenticationError } = require("apollo-server-express");

const SECRET_KEY = process.env.JWT_SECRET_KEY;

module.exports = {
  Query: {
    users: async () => {
      try {
        return await User.find();
      } catch (err) {
        throw new Error("Error fetching users: " + err.message);
      }
    },

    user: async (_, { id }) => {
      try {
        const user = await User.findById(id);
        if (!user) throw new Error("User not found");
        return user;
      } catch (err) {
        throw new Error("Error fetching user: " + err.message);
      }
    },
  },

  Mutation: {
    register: async (_, { input }) => {
      const { name, email, password } = input;

      try {
        const existingUser = await User.findOne({ email:email });
        if (existingUser) throw new Error("Email is already in use");


        // const hashedPassword = await bcrypt.hash(password,10);

        // Create new user
        const newUser = new User({
          name,
          email,
          password,
          createdAt: new Date().toISOString(),
        });

       
        await newUser.save();

        console.log("New user created:", newUser);
       
        const token = jwt.sign({ userId: newUser._id.toString() }, SECRET_KEY, { expiresIn: "1h" });

        return { token, user: { ...newUser.toObject(), password: null } };
      } catch (err) {
        throw new Error("Error registering user: " + err.message);
      }
    },

    login: async (_, { input }) => {
      const { email, password } = input;

      try {
        console.log('email',email)
        const user = await User.findOne({ email:email });
        console.log('user',user);
        if (!user) throw new AuthenticationError("Invalid credentials");
        console.log('pass',password,'userpass',user.password)
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) 
          {
            console.log('in pass ')
            throw new AuthenticationError("Invalid credentials");
          }

        
        const token = jwt.sign({ userId: user._id.toString(), email: user.email }, SECRET_KEY, { expiresIn: "7d" });


        return { token,
            user: {
              _id: user._id,
              name: user.name,
              userRole:user.userRole,
              email: user.email,
            }};
      } catch (err) {
        throw new Error("Error logging in: " + err.message);
      }
    },

  },
};

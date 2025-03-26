import NextAuth from 'next-auth';
import type { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb-adapter';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../../../model/user';

// Ensure database connection
async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI || '');
}

const authOptions: AuthOptions = {
  // Configure MongoDB adapter
  adapter: MongoDBAdapter(clientPromise),

  // Configure Credentials Provider
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Validate credentials
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Connect to database
        await connectDB();

        // Find user by email
        const user = await User.findOne({ email: credentials.email });
        
        if (!user) {
          return null;
        }

        // Compare passwords
        const isValidPassword = await bcrypt.compare(
          credentials.password, 
          user.password
        );

        if (!isValidPassword) {
          return null;
        }

        // Return user object
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email
        };
      }
    })
  ],

  // Configure session and JWT
  session: {
    strategy: 'jwt',
  },

  // Customize pages
  pages: {
    signIn: '/auth/login',
  },

  // Callbacks
  callbacks: {
    async session({ session, token }) {
      // Add user ID to session
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Add user ID to token if it exists
      if (user) {
        token.sub = user.id;
      }
      return token;
    }
  },

  // Enable debug in development
  debug: process.env.NODE_ENV === 'development'
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
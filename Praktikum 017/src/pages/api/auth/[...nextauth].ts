import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signIn, loginWithGoogle } from "@/utils/db/servicefirebase"; 

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const res = await signIn({
          email: credentials.email,
          password: credentials.password,
        });

        if (res.status && res.data) {
          return res.data as any; 
        } else {
          throw new Error(res.message);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname;
        token.role = user.role;
        token.id = user.id;
      }
      
      if (account?.provider === "google" && user) {
        const data = {
          fullname: user.name,
          email: user.email,
        };
        
        const userDB: any = await loginWithGoogle(data);

        if (userDB) {
          token.email = userDB.email;
          token.fullname = userDB.fullname; 
          token.role = userDB.role; 
          token.id = userDB.id;
        } else {
          token.email = user.email;
          token.fullname = user.name; 
          token.role = "user"; 
          token.id = user.id;
        }
        
        token.picture = user.image; 
      }
      
      return token;
    },
    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.email = token.email;
        (session.user as any).fullname = token.fullname;
        (session.user as any).role = token.role;
        (session.user as any).id = token.id;
        
        session.user.image = token.picture as string; 
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
import { PrismaAdapter } from "@auth/prisma-adapter";
import { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
// import { CredentialsProvider } from "next-auth/providers";
import CredentialsProvider from "next-auth/providers/credentials";

// import prisma from "../../../../utils/connect";

export const authOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      console.log("signInsignInsignInsignIn");
      let isAllowedToSignIn = true;
      const allowedUser = ["53728519"];
      console.log(user);
      if (allowedUser.includes(String(user.id))) {
        isAllowedToSignIn = true;
      } else {
        isAllowedToSignIn = false;
      }
      return isAllowedToSignIn;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);

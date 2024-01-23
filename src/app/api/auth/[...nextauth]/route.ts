
import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";



const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions };
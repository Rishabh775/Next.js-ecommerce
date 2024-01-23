import { mergeAnonymousCartIntoUserCart } from "@/lib/db/cart";
import { prisma } from "@/lib/db/prisma";
import { env } from "@/lib/env";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";

export const authOptions : NextAuthOptions = {
    adapter :PrismaAdapter(prisma as PrismaClient) as Adapter,
    providers : [
        GithubProvider({
           
            clientId:env.GITHUB_ID,
            clientSecret:env.GITHUB_SECRET
        })
    ],
    callbacks: {
        session({session, user}){
          session.user.id = user.id
          return session
        }
    },

    events:{
       async signIn({user}){
        await mergeAnonymousCartIntoUserCart(user.id)
        }
    }
}


const handler = NextAuth(authOptions);

export {
    handler as GET , handler as POST
}
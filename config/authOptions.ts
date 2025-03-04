import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "admin",
      name: "Admin",
      credentials: { email: { label: "Email", type: "text" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) throw new Error("Missing email or password");
        const user = await prisma.admin.findUnique({ where: { email: credentials.email } });
        if (!user || credentials.password !== user.password) throw new Error("Invalid email or password");
        return { id: user.id, email: user.email, role: "ADMIN" };
      },
    }),
    CredentialsProvider({
      id: "teacher",
      name: "Teacher",
      credentials: { email: { label: "Email", type: "text" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) throw new Error("Missing email or password");
        const user = await prisma.teacher.findUnique({ where: { email: credentials.email } });
        if (!user || credentials.password !== user.password) throw new Error("Invalid email or password");
        return { id: user.id, email: user.email, role: "TEACHER" };
      },
    }),
    CredentialsProvider({
      id: "student",
      name: "Student",
      credentials: { email: { label: "Email", type: "text" }, password: { label: "Password", type: "password" } },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) throw new Error("Missing email or password");
        const user = await prisma.student.findUnique({ where: { email: credentials.email } });
        if (!user || credentials.password !== user.password) throw new Error("Invalid email or password");
        return { id: user.id, email: user.email, role: "STUDENT" };
      },
    }),
    
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role as string;
      return session;
    },
  },
};

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

const handler = NextAuth({
  debug: true,
  providers: [
    CredentialsProvider({
      id: "admin",
      name: "Admin Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const user = await prisma.admin.findUnique({
          where: { email: credentials.email },
        });

        if (!user || credentials.password !== user.password) {
          throw new Error("Invalid email or password");
        }

        return { id: user.id, email: user.email, role: "ADMIN" };
      },
    }),

    CredentialsProvider({
      id: "student",
      name: "Student Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const user = await prisma.student.findUnique({
          where: { email: credentials.email },
        });

        if (!user || credentials.password !== user.password) {
          throw new Error("Invalid email or password");
        }

        return { id: user.id, email: user.email, role: "STUDENT" };
      },
    }),

    CredentialsProvider({
      id: "teacher",
      name: "Teacher Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const user = await prisma.teacher.findUnique({
          where: { email: credentials.email },
        });

        if (!user || credentials.password !== user.password) {
          throw new Error("Invalid email or password");
        }

        return { id: user.id, email: user.email, role: "TEACHER" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login", // Dynamic redirect handled below
    error: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.includes("admin")) return `${baseUrl}/auth/login/admin`;
      if (url.includes("student")) return `${baseUrl}/auth/login/student`;
      if (url.includes("teacher")) return `${baseUrl}/auth/login/teacher`;
      return baseUrl;
    },
  },
  session: { strategy: "jwt" },
});

export { handler as GET, handler as POST };

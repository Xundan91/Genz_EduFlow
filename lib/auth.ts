import { getServerSession } from "next-auth";
import { authOptions } from "../config/authOptions";

export async function requireAuth(role: string) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== role) {
    throw new Error("Unauthorized");
  }
  return session;
}

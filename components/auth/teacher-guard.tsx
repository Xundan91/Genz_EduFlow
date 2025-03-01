import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const TeacherGuard = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "Teacher") {
      router.push("/auth/login/teacher");
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;
  return <>{children}</>;
};

export default TeacherGuard;

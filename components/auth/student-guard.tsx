import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const StundentGuard = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session || session.user.role !== "STUDENT") {
      router.push("/auth/login/student");
    }
  }, [session, status, router]);

  if (status === "loading") return <p>Loading...</p>;
  return <>{children}</>;
};

export default StundentGuard;

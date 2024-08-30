import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./provider/SessionProvider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");

  return <SessionProvider value={session}>{children}</SessionProvider>;
}

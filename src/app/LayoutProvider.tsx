"use client";
import StoreProvider from "@/store/StoreProvider";
import { usePathname } from "next/navigation";
import Header from "./components/Header";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const specialRoutes = ["/admin", "/auth/register"];
  const pathName = usePathname();

  return (
    <StoreProvider>
      <div>
        {!specialRoutes.includes(pathName) && <Header />}
        {children}
      </div>
    </StoreProvider>
  );
}

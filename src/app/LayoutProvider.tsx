"use client";
import StoreProvider from "@/store/StoreProvider";
import { usePathname } from "next/navigation";
import Header from "./components/Header";
import { useEffect } from "react";
import TokenService from "@/utils/TokenService";
import { useGetUserByIdMutation, useNewUserMutation } from "@/services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/features/auth/authSlice";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const specialRoutes = ["/admin", "/auth/register", "/auth/login"];
  const pathName = usePathname();
  const [getUserById] = useGetUserByIdMutation({});
  const dispatch = useDispatch();
  const saveSession = async () => {
    const session = TokenService.getToken();
    if (session) {
      const response = await getUserById(session).unwrap();
      dispatch(setUser(response));
    }
  };
  useEffect(() => {
    saveSession();
  }, []);
  return (
    <div>
      {!specialRoutes.includes(pathName) && <Header />}
      {children}
    </div>
  );
}

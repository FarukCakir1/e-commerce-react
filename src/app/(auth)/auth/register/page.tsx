"use client";
import RegisterCard from "@/app/components/RegisterCard";
import { IUser } from "@/types/User";
import { useNewUserMutation } from "@/services/authApi";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/store";
import { login } from "@/store/features/auth/authSlice";
import { ReactNode } from "react";

export default function Register() {
  const [newUser, result] = useNewUserMutation();
  const activeUser = useSelector((state: RootState) => state.auth.activeUser);
  const dispatch = useDispatch();
  const getNewUserValues = async (values: IUser) => {
    const response = await newUser({ ...values }).unwrap();
    dispatch(login(response));
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <RegisterCard getValuesFn={getNewUserValues} />
    </div>
  );
}

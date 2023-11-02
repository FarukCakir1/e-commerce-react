"use client";
import RegisterCard from "@/app/components/RegisterCard";
import { IUser } from "@/types/User";
import { useNewUserMutation } from "@/services/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/features/auth/authSlice";

export default function Register() {
  const [newUser, result] = useNewUserMutation();
  const dispatch = useDispatch();
  const getNewUserValues = async (values: IUser) => {
    const response = await newUser({ ...values }).unwrap();
    dispatch(setUser(response));
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <RegisterCard getValuesFn={getNewUserValues} />
    </div>
  );
}

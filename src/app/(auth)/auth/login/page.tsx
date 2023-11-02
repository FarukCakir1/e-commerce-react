"use client";
import LoginCard from "@/app/components/LoginCard";
import { useLoginMutation } from "@/services/authApi";
import { ILoginPayload } from "@/types/LoginPayload";
import urlCreator from "@/utils/urlCreator";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/features/auth/authSlice";
import { IUser } from "@/types/User";
import { useRouter } from "next/navigation";
export default function Login() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const router = useRouter();
  const getLoginValues = async (values: ILoginPayload) => {
    const response = await login(urlCreator.crate("/users", values)).unwrap();
    const userData: IUser = { ...response[0] };
    dispatch(setUser(userData));
    router.push("/");
  };
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <LoginCard getValuesFn={getLoginValues} />
    </div>
  );
}

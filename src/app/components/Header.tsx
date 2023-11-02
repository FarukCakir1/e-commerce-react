"use client";
import AutoCompleteInput from "./AutoCompleteInput";
import { Dropdown } from "antd";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { IAutoCompleteOption } from "../../types/components/AutoComplete";
import HeaderCategories from "./HeaderCategories";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import TokenService from "@/utils/TokenService";
import { getBasket, getTotalItemOnCart } from "@/store/features/auth/authSlice";
import { useDispatch } from "react-redux";
export default function Header() {
  const dispatch = useDispatch();
  const [headerSearchOptions, setHeaderSearchOption] = useState<
    Array<IAutoCompleteOption>
  >([{ id: 1, value: "test" }]);
  const router = useRouter();
  const { activeUser, totalItem } = useSelector(
    (state: RootState) => state.auth
  );
  const createDropdownItems = (role: string | undefined) => {
    console.log(role);
    if (role == "ADMIN") {
      return [
        {
          label: "Hesabım",
          key: "account",
          route: "/",
        },
        {
          label: "Admin Panel",
          key: "admin",
          route: "/admin",
        },
        {
          label: <span className="text-red-500">Çıkış Yap</span>,
          key: "logout",
          route: "/",
        },
      ];
    } else {
      return [
        {
          label: "Hesabım",
          key: "account",
          route: "/",
        },
        {
          label: <span className="text-red-500">Çıkış Yap</span>,
          key: "logout",
          route: "/",
        },
      ];
    }
  };
  const [accountDropdownItems, setAccountDropdownItems] = useState<Array<any>>(
    []
  );
  useEffect(() => {
    setAccountDropdownItems(createDropdownItems(activeUser?.role));
  }, [activeUser?.role]);
  const handleClick = (e: any) => {
    console.log(e);
    if (e.key === "logout") {
      TokenService.clearToken();
      window.location.reload();
    } else {
      router.push(`/${e.key}`);
    }
  };
  return (
    <header className="w-full h-auto">
      <div className="container mx-auto px-10 h-20 flex gap-10 items-center">
        <h1 className="text-xl text-blue-600 flex-shrink-0">E-commerce-app</h1>
        <div className="px-10 flex w-full">
          <AutoCompleteInput options={headerSearchOptions} />
        </div>
        <span
          onClick={() => router.push("/basket")}
          className="flex gap-2 items-center justify-center h-full relative"
        >
          {totalItem > 0 && (
            <div
              v-if="basketStore.getBasketCount > 0"
              className="absolute w-5 h-5 border border-black rounded-full bg-blue-400 text-white flex items-center justify-center text-xs -left-1 top-4"
            >
              {totalItem}
            </div>
          )}

          <ShoppingCartOutlined style={{ fontSize: "30px" }} />
          <span>Sepetim</span>
        </span>
        <div className="flex gap-2 flex-shrink-0 items-center">
          <UserOutlined style={{ fontSize: "30px" }} />
          {!activeUser && (
            <div className="flex gap-px flex-col">
              <span className="text-xs text-gray-500 mb-[-5px]">Hesabım</span>
              <div className="flex gap-2 items-center">
                <span
                  className="text-sm underline hover:no-underline font-semibold cursor-pointer"
                  onClick={() => router.push("/auth/register")}
                >
                  Üye ol
                </span>
                <div className="w-1 h-1 rounded-full bg-blue-500" />
                <span
                  onClick={() => router.push("/auth/login")}
                  className="text-sm underline hover:no-underline font-semibold cursor-pointer"
                >
                  Giriş Yap
                </span>
              </div>
            </div>
          )}
          {activeUser && (
            <Dropdown
              menu={{ items: accountDropdownItems, onClick: handleClick }}
            >
              <span className="text-xs text-gray-500 mb-[-5px] cursor-pointer">
                Hesabım
              </span>
            </Dropdown>
          )}
        </div>
      </div>
      <HeaderCategories />
    </header>
  );
}

"use client";
import { useGetProductsQuery } from "@/services/productApi";
import Slider from "./components/Slider";
import { IProductCardItem } from "@/types/components/ProductCard";
import ItemCard from "./components/ItemCard";
import { useEffect } from "react";
import TokenService from "@/utils/TokenService";
import { useGetUserByIdMutation, useNewUserMutation } from "@/services/authApi";
import { useDispatch } from "react-redux";
import { login } from "@/store/features/auth/authSlice";

export default function Home() {
  const { data } = useGetProductsQuery([]);
  const [getUserById] = useGetUserByIdMutation({});
  const dispatch = useDispatch();
  const saveSession = async () => {
    const session = TokenService.getToken();
    if (session) {
      const response = await getUserById(session).unwrap();
      dispatch(login(response));
    }
  };
  useEffect(() => {
    saveSession();
  }, []);
  return (
    <main className="py-10">
      <div className="best-sellers bg-blue-100">
        <div className="flex flex-col container p-10 mx-auto gap-5">
          <h2 className="text-2xl font-semibold">Çok Satanlar</h2>
          <Slider itemsPerPage={4} gap={20} />
        </div>
      </div>
      <div className="flex flex-col container px-10 mx-auto mt-5 gap-5">
        <h2 className="text-2xl font-semibold">Ürünler</h2>
        <div className="products gap-5 grid grid-cols-4">
          {data?.map((item: IProductCardItem) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
        {/* <a-pagination
        v-model:current="currentPage"
        :total="10"
        :pageSize="8"
        className="ml-auto flex my-5"
        @change="pageChange"
      /> */}
      </div>
    </main>
  );
}

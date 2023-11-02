"use client";
import { useGetProductsQuery } from "@/services/productApi";
import Slider from "./components/Slider";
import { IProductCardItem } from "@/types/components/ProductCard";
import ItemCard from "./components/ItemCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useDispatch } from "react-redux";
import {
  addItemToBasket,
  increaseItemAmount,
} from "@/store/features/basket/basketSlice";

export default function Home() {
  const { data } = useGetProductsQuery([]);
  const basket = useSelector((state: RootState) => state.auth.basket);
  const dispatch = useDispatch();
  const addItem = async (item: any) => {
    const checkItem = basket.find((basketItem) => basketItem.id === item.id);
    if (checkItem) {
      console.log("asfsdf");
      dispatch(increaseItemAmount(item));
    } else {
      dispatch(addItemToBasket([...basket, item]));
    }
  };
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
            <ItemCard key={item.id} item={item} addItemToBasket={addItem} />
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

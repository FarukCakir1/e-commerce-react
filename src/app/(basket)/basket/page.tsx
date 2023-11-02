"use client";
import { RootState } from "@/store";
import { Button, InputNumber, Popconfirm } from "antd";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useRouter } from "next/navigation";
import { IProductBasket } from "@/types/components/ProductBasket";
import { useDispatch } from "react-redux";
import {
  addItemToBasket,
  deleteItem,
} from "@/store/features/basket/basketSlice";
import {
  useAddItemToBasketMutation,
  useDeleteItemToBasketMutation,
} from "@/services/authApi";
import { useEffect, useState } from "react";
import { DeleteFilled } from "@ant-design/icons";

export default function Basket() {
  const dispatch = useDispatch();
  const router = useRouter();
  let basket = useSelector((state: RootState) => state.auth.basket);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    if (basket.length > 0) {
      setTotalPrice(
        basket?.reduce(
          (pre: any, curr: IProductBasket) => pre + curr.price * curr.amount,
          0
        )
      );
    }
  }, [basket]);
  const onChange = async (value: number | null, item: IProductBasket) => {
    let editedItem = { ...item, amount: value };
    let manipulatedBasket = basket?.filter(
      (basketItem: IProductBasket) => basketItem.id !== item.id
    );
    basket = [...manipulatedBasket, editedItem];
    setTotalPrice(
      basket.reduce(
        (pre: any, curr: IProductBasket) => pre + curr.price * curr.amount,
        0
      )
    );
    dispatch(addItemToBasket(basket));
  };
  const handleDelete = async (item: IProductBasket) => {
    const payload = basket.filter(
      (basketItem: IProductBasket) => basketItem.id !== item.id
    );
    dispatch(deleteItem(payload));
  };
  return (
    <div className="container flex items-center px-10 mx-auto">
      <div className="border border-gray-100 flex flex-col gap-3 w-full px-5 pt-5 items-center">
        {basket && basket?.length > 0 && (
          <div className="item-list flex flex-col gap-5 w-full">
            <ul>
              {basket.map((item: IProductBasket) => (
                <li
                  v-for="(product, i) in getBasket"
                  key={item.id}
                  className="flex w-full h-[100px] border border-gray-100 mb-5"
                >
                  <div className="img-wrapper w-1/9 h-full border-r border-r-gray-100">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full max-h-full object-fill"
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <div className="flex flex-col justify-center pl-10 items-start px-5 gap-2">
                      <span className="text-lg font-semibold">
                        {item.title}
                      </span>
                      <span> {item.price}₺ </span>
                    </div>
                    <div className="flex h-full items-center gap-3 pr-12">
                      <InputNumber
                        min={0}
                        max={10000}
                        defaultValue={item.amount}
                        onChange={(value) => onChange(value, item)}
                      />
                      <Popconfirm
                        title="Bu ürün kalıcı olarak silinecek onaylıyor musunuz?"
                        okText="Onayla"
                        cancelText="Vazgeç"
                        onConfirm={() => handleDelete(item)}
                      >
                        <DeleteFilled
                          style={{
                            fontSize: "20px",
                            color: "red",
                            cursor: "pointer",
                          }}
                        />
                      </Popconfirm>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between w-full mt-auto border-t border-t-gray-100 py-5">
              <span className="text-xl"> {totalPrice} </span>
              <Button
                onClick={() => router.push("/payment")}
                className="bg-blue-300 text-white ml-auto hover:!text-white"
                shape="round"
                size="large"
              >
                Ödemeye geç
              </Button>
            </div>
          </div>
        )}
        {basket?.length === 0 && (
          <div className="w-full flex flex-col gap-14">
            <h3 className="text-center text-2xl">
              Henüz sepetinde hiç bir ürün yok. Hemen en uygun fiyatlarla
              alışverişe başla
            </h3>
            <Button
              onClick={() => router.push("/")}
              className="bg-blue-300 text-white ml-auto mb-2"
              shape="round"
              size="large"
            >
              Alışverişe Başla
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

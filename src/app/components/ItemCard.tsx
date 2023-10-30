import { IProductCardItem } from "@/types/components/ProductCard";
import { Rate, Button } from "antd";

export default function ItemCard({ item }: { item: IProductCardItem }) {
  return (
    <div className="product-card shadow-sm border border-gray-50 flex flex-col p-3 bg-white overflow-hidden">
      <div className="border-gray-100 rounded-sm overflow-hidden h-3/4 max-w-full">
        <img className="w-full h-full" src={item.image} alt="" />
      </div>
      <div className="w-full p-2 h-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-2 items-start">
          <span className="text-md font-semibold">{item.title}</span>
          <Rate
            defaultValue={item.rate}
            disabled
            style={{ fontSize: "15px" }}
            allow-half
          />
        </div>
        <h4 className="text-xl font-semibold">{item.price}₺</h4>
        <Button
          size="large"
          shape="round"
          className="bg-blue-400 text-white"
          // onClick="store.addItemToBasket(item)"
        >
          Sepete Ekle
        </Button>
      </div>
    </div>
  );
}

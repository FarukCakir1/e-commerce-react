import { Rate } from "antd";
export default function SliderItem({
  title,
  price,
  image,
  itemWidth,
}: {
  title: string;
  price: string;
  image: string;
  itemWidth: number;
}) {
  return (
    <div
      className="product-card shadow-sm border border-gray-50 flex flex-col flex-shrink-0 p-3 bg-white overflow-hidden max-h-[350px]"
      style={{
        width: `${itemWidth}px`,
        height: `${itemWidth && itemWidth * 1.3}px`,
      }}
    >
      <div
        className="border-gray-100 rounded-sm overflow-hidden h-3/4 max-w-full"
        style={{ width: `${itemWidth}px` }}
      >
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className="w-full p-2 h-1/2 flex flex-col justify-between">
        <div className="flex flex-col gap-2 items-start">
          <span className="text-md font-semibold">{title}</span>
          <Rate defaultValue={2} disabled />
        </div>
        <h4 className="text-xl font-semibold">{price}₺</h4>
      </div>
    </div>
  );
}

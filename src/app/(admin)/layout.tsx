import StoreProvider from "@/store/StoreProvider";
import { DesktopOutlined } from "@ant-design/icons";
import { Menu } from "antd";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    {
      label: "Ürün Yönetimi",
      key: "1",
      icon: <DesktopOutlined />,
    },
  ];
  return (
    <div className="w-screen h-screen flex gap-1">
      <Menu
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        className="h-screen bg-gray-100 w-[260px] max-w-[260px]"
      />
      <div className="w-full p-8">{children}</div>
    </div>
  );
}

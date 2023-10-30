import { Dropdown, Space } from "antd";
import { ICategory } from "../../types/components/Header";

export default function HeaderCategories() {
  const categories: Array<ICategory> = [
    {
      name: "Elektronik",
      id: 1,
      routeUrl: "elektronik",
      categoryImage:
        "https://n11scdn.akamaized.net/a1/30/23/04/27/50/92/89/68/98/82/81/83/46/87911743275366201592.png",
      items: [
        {
          label: <a href="https://www.antgroup.com">Bilgisayar</a>,
          key: "8",
        },
        {
          label: <a href="https://www.antgroup.com">Telefon</a>,
          key: "9",
        },
        {
          label: <a href="https://www.antgroup.com">Tv</a>,
          key: "10",
        },
      ],
    },
    {
      name: "Moda",
      id: 2,
      routeUrl: "moda",
      categoryImage:
        "https://n11scdn.akamaized.net/a1/30/22/08/01/53/46/97/55/78/81/00/58/49/31961828233979739225.png",
      items: [
        {
          label: <a href="https://www.antgroup.com">Erkek Giyim</a>,
          key: "11",
        },
        {
          label: <a href="https://www.antgroup.com">Kadın Giyim</a>,
          key: "12",
        },
        {
          label: <a href="https://www.antgroup.com">Çocuk Giyim</a>,
          key: "12",
        },
      ],
    },
    {
      name: "Ev & Yaşam",
      id: 3,
      routeUrl: "home-living",
      categoryImage:
        "https://n11scdn.akamaized.net/a1/30/22/08/01/86/32/24/29/29/47/16/41/05/57126929366806936432.png",
      items: [
        {
          label: <a href="https://www.antgroup.com">Oturma Odası</a>,
          key: "13",
        },
        {
          label: <a href="https://www.antgroup.com">Yatak Odası</a>,
          key: "14",
        },
        {
          label: <a href="https://www.antgroup.com">Mutfak</a>,
          key: "15",
        },
      ],
    },
    {
      name: "Anne & Bebek",
      id: 4,
      routeUrl: "babies",
      categoryImage:
        "https://n11scdn.akamaized.net/a1/30/22/08/01/77/23/79/89/22/11/13/67/06/1817596495358676750.png",
      items: [
        {
          label: <a href="https://www.antgroup.com">Oyuncak</a>,
          key: "16",
        },
        {
          label: <a href="https://www.antgroup.com">Gıda</a>,
          key: "17",
        },
        {
          label: <a href="https://www.antgroup.com">Gğvenlik</a>,
          key: "18",
        },
      ],
    },
    {
      name: "Kozmetik & Kişisel Bakım",
      id: 5,
      routeUrl: "self-care",
      categoryImage:
        "https://n11scdn.akamaized.net/a1/30/22/08/01/82/78/22/64/91/17/58/84/05/11823586115151480719.png",
      items: [
        {
          label: <a href="https://www.antgroup.com">Erkek Giyim</a>,
          key: "19",
        },
        {
          label: <a href="https://www.antgroup.com">Kadın Giyim</a>,
          key: "20",
        },
        {
          label: <a href="https://www.antgroup.com">Çocuk Giyim</a>,
          key: "21",
        },
      ],
    },
    {
      name: "Takı",
      id: 6,
      routeUrl: "accessories",
      categoryImage:
        "https://n11scdn.akamaized.net/a1/30/23/05/30/61/78/87/08/84/35/58/58/07/48911776658065241375.png",
      items: [
        {
          label: <a href="https://www.antgroup.com">Erkek Giyim</a>,
          key: "22",
        },
        {
          label: <a href="https://www.antgroup.com">Kadın Giyim</a>,
          key: "23",
        },
        {
          label: <a href="https://www.antgroup.com">Çocuk Giyim</a>,
          key: "24",
        },
      ],
    },
    {
      name: "Spor",
      id: 7,
      routeUrl: "sport",
      categoryImage:
        "https://n11scdn.akamaized.net/a1/30/22/08/01/78/48/54/32/73/75/59/66/38/52455961286243405128.png",
      items: [
        {
          label: <a href="https://www.antgroup.com">Erkek Giyim</a>,
          key: "25",
        },
        {
          label: <a href="https://www.antgroup.com">Kadın Giyim</a>,
          key: "26",
        },
        {
          label: <a href="https://www.antgroup.com">Çocuk Giyim</a>,
          key: "27",
        },
      ],
    },
  ];
  return (
    <div className="w-full bg-gray-50">
      <ul className="container mx-auto px-10 flex items-center justify-between py-4">
        {categories.map((category: ICategory, index: number) => (
          <li key={index}>
            <Dropdown menu={{ items: category.items }} trigger={["click"]}>
              <Space>
                <a
                  onClick={(e) => e.preventDefault()}
                  className="ant-dropdown-link flex gap-1 items-center cursor-pointer"
                >
                  <img
                    className="w-[30px] h-[30px] rounded-sm"
                    src={category.categoryImage}
                    alt=""
                  />
                  <span className="text-md">{category.name}</span>
                </a>
              </Space>
            </Dropdown>
          </li>
        ))}
      </ul>
    </div>
  );
}

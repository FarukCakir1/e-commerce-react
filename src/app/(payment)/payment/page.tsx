"use client";
import { RootState } from "@/store";
import { getAddress, getCards } from "@/store/features/auth/authSlice";
import { getBasket, getTotalPrice } from "@/store/features/basket/basketSlice";
import { ICard } from "@/types/Card";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Form, Input, Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function Payment() {
  const dispatch = useDispatch();
  const { userCards, userAddresses } = useSelector(
    (state: RootState) => state.auth
  );
  const { totalPrice } = useSelector((state: RootState) => state.basket);
  const [cardModal, setCardModal] = useState(false);
  const [selectedCard, setSelectdCard] = useState("Kart Seç");
  const [addressModal, setAddressModal] = useState(false);
  const [selectedAddress, setSelectdAddress] = useState("Address Seç");
  const handleNewAddress = (values: any) => {
    setAddressModal(false);
  };
  const handleNewCard = (values: any) => {
    console.log(values);
    setCardModal(false);
  };
  useEffect(() => {
    dispatch(getCards());
    dispatch(getAddress());
    dispatch(getBasket());
  }, [dispatch]);
  return (
    <div className="w-full h-full flex justify-center items-start mt-10">
      <Modal
        open={addressModal}
        title="Basic Modal"
        footer={
          <span>Adres bilgilerinizi doğru girdiğinizden emin olunuz.</span>
        }
        onCancel={() => setAddressModal(false)}
      >
        <Form
          className="w-full"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleNewAddress}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<string>
            label="Adres Başlığı"
            name="address-title"
            rules={[{ required: true, message: "Adres Başlığı Zorunludur!" }]}
          >
            <Input size="large" placeholder="Adres Başlığı" />
          </Form.Item>

          <Form.Item<string>
            label="Adres"
            name="address"
            rules={[{ required: true, min: 3, message: "Adres zorunludur" }]}
          >
            <Input size="large" placeholder="Adres" />
          </Form.Item>
          <Form.Item className="w-full">
            <Button
              className="w-full bg-blue-300 text-white hover:bg-blue-400 hover:!text-white"
              size="large"
              htmlType="submit"
            >
              Addres ekle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        open={cardModal}
        title="Basic Modal"
        footer={
          <span>Kart bilgilerinizi doğru girdiğinizden emin olunuz.</span>
        }
        onCancel={() => setCardModal(false)}
      >
        <div className="flex flex-col gap-3">
          <Form
            className="w-full"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={handleNewCard}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item<string>
              label="Kart Adı"
              name="address-title"
              rules={[{ required: true, message: "Kart Adı Zorunludur!" }]}
            >
              <Input size="large" placeholder="Kart Adı" />
            </Form.Item>

            <Form.Item<string>
              label="Kart Numarası"
              name="address"
              rules={[
                { required: true, min: 3, message: "Kart Numarası zorunludur" },
              ]}
            >
              <Input size="large" placeholder="Kart Numarası" />
            </Form.Item>
            <Form.Item<string>
              label="Son Kullanma Tarihi"
              name="address"
              rules={[
                {
                  required: true,
                  min: 3,
                  message: "Son Kullanma Tarihi zorunludur",
                },
              ]}
            >
              <Input size="large" placeholder="Son Kullanma Tarihi" />
            </Form.Item>
            <Form.Item<string>
              label="Kart Sahibi"
              name="address"
              rules={[
                { required: true, min: 3, message: "Kart Sahibi zorunludur" },
              ]}
            >
              <Input size="large" placeholder="Kart Sahibi" />
            </Form.Item>
            <Form.Item<string>
              label="CVV"
              name="address"
              rules={[{ required: true, min: 3, message: "CVV zorunludur" }]}
            >
              <Input size="large" placeholder="CVV" />
            </Form.Item>
            <Form.Item className="w-full">
              <Button
                className="w-full bg-blue-300 text-white hover:bg-blue-400 hover:!text-white"
                size="large"
                htmlType="submit"
              >
                Kart Ekle
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
      <div className="container px-10 mx-auto flex flex-col gap-5">
        <div className="address flex flex-col gap-6 border border-gray-100 shadow-xl p-5">
          <span>Kayıtlı Adreslerim</span>
          <Dropdown
            menu={{
              items: userAddresses,
              onClick: (e) => setSelectdAddress(e.key),
            }}
            trigger={["click"]}
          >
            <span className="flex items-center gap-2 border border-blue-400 rounded-md w-max p-2">
              {selectedAddress}
              <DownOutlined />
            </span>
          </Dropdown>
        </div>
        <div className="flex flex-col gap-6 border border-gray-100 shadow-xl p-5">
          <span>Kayıtlı Kartlarım</span>
          <Dropdown
            menu={{
              items: userCards,
              onClick: (e) => setSelectdCard(e.key.toUpperCase()),
            }}
            trigger={["click"]}
          >
            <span className="flex items-center gap-2 border border-blue-400 rounded-md w-max p-2">
              <span>{selectedCard}</span>
              <DownOutlined />
            </span>
          </Dropdown>
        </div>
        <div className="shadow-xl p-5 flex justify-between items-center">
          <span className="text-md">{totalPrice}₺</span>
          <Button
            className="bg-blue-300 text-white mxlauto"
            shape="round"
            size="large"
          >
            Alışverişi tamamla
          </Button>
        </div>
      </div>
    </div>
  );
}

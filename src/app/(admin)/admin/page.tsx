"use client";
import {
  useGetFilteredProductsQuery,
  useUpdateProductMutation,
} from "@/services/productApi";
import { IProduct } from "@/types/Product";
import { IProductCardItem } from "@/types/components/ProductCard";
import urlCreator from "@/utils/urlCreator";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { Button, Form, Input, Modal, Pagination, Popconfirm } from "antd";
import { useEffect, useState } from "react";

export default function Admin() {
  const [reqPayload, setReqPayload] = useState({
    _page: 1,
    _sort: "price",
    _order: "asc",
    _limit: 5,
  });
  const { data } = useGetFilteredProductsQuery(
    urlCreator.crate("/products", reqPayload)
  );
  const [updateProduct] = useUpdateProductMutation();
  const [editModal, setEditModal] = useState<boolean>(false);
  const [editedItem, setEditedItem] = useState<IProductCardItem>();
  const handlePagination = (e) => {
    setReqPayload({ ...reqPayload, _page: e });
  };
  const openEditModal = (item: IProductCardItem) => {
    setEditModal(true);
    setEditedItem(item);
  };
  const handleEdit = async (values) => {
    const item = editedItem;

    const response = updateProduct({
      ...item,
      title: values["product-name"] ? values["product-name"] : item?.title,
      price: values.price || item?.price,
    });
    console.log(response);
  };
  useEffect(() => {}, [reqPayload, data]);
  return (
    <div className="h-full flex flex-col gap-5">
      <Modal
        footer={null}
        onCancel={() => setEditModal(false)}
        open={editModal}
      >
        <Form
          className="w-full"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleEdit}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<string> label="Ürün Adı" name="product-name">
            <Input
              size="large"
              placeholder="Ürün Adı"
              defaultValue={editedItem?.title}
              value={editedItem?.title}
            />
          </Form.Item>

          <Form.Item<string> label="Fiyat" name="price">
            <Input
              size="large"
              placeholder="Fiyat"
              defaultValue={editedItem?.price}
            />
          </Form.Item>
          <Form.Item className="w-full">
            <Button
              className="w-full bg-blue-300 text-white hover:bg-blue-400 hover:!text-white"
              size="large"
              htmlType="submit"
            >
              Düzenle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <ul>
        {data?.map((product: IProductCardItem) => (
          <li
            key={product.id}
            className="flex w-full h-[100px] border border-gray-100 mb-5"
          >
            <div className="img-wrapper w-1/9 h-full border-r border-r-gray-100">
              <img
                src={product.image}
                alt=""
                className="w-full max-h-full object-fill"
              />
            </div>
            <div className="flex w-full justify-between">
              <div className="flex flex-col justify-center pl-10 items-start px-5 gap-2">
                <span className="text-lg font-semibold">{product.title}</span>
                <span> {product.price}₺ </span>
              </div>
              <div className="flex h-full items-center gap-3 pr-12">
                <EditFilled
                  style={{ fontSize: "20px", cursor: "pointer" }}
                  onClick={() => openEditModal(product)}
                />
                <Popconfirm
                  title="Bu ürün kalıcı olarak silinecek onaylıyor musunuz?"
                  okText="Onayla"
                  cancelText="Vazgeç"
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
      <Pagination
        defaultCurrent={1}
        total={10}
        pageSize={5}
        onChange={handlePagination}
      />
    </div>
  );
}

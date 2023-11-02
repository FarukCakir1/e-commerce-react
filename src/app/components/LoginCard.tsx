"use client";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function LoginCard({
  getValuesFn,
}: {
  getValuesFn: (values: any) => void;
}) {
  const onSubmit = (values: any) => {
    getValuesFn(values);
  };
  return (
    <Form
      className="w-1/2 h-auto p-7 max-w-[600px] flex flex-col gap-3 border border-gray-100 shadow-xl bg-white"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      autoComplete="off"
      layout="vertical"
    >
      <Form.Item<string>
        label="Kullanıcı Adı"
        name="username"
        rules={[{ required: true, message: "Kullanıcı Adı Zorunludur!" }]}
      >
        <Input
          size="large"
          placeholder="Kullanıcı Adı"
          prefix={<UserOutlined className="text-gray-400" />}
        />
      </Form.Item>

      <Form.Item<string>
        label="Şifre"
        name="password"
        rules={[{ required: true, min: 3, message: "Şifre Alanı zorunludur" }]}
      >
        <Input.Password
          size="large"
          placeholder="Şifre"
          prefix={<LockOutlined className="text-gray-400" />}
        />
      </Form.Item>
      <Form.Item className="w-full">
        <Button
          className="w-full bg-blue-300 text-white hover:bg-blue-400 hover:!text-white"
          size="large"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

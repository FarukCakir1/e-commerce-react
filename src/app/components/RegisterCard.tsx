"use client";
import { IUser } from "@/types/User";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input } from "antd";

export default function RegisterCard({
  getValuesFn,
}: {
  getValuesFn: (values: IUser) => void;
}) {
  const onSubmit = (values: any) => {
    getValuesFn(values);
  };
  return (
    <Form
      className="w-1/2 h-auto p-7 flex flex-col gap-3 border border-gray-100 shadow-xl bg-white"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      autoComplete="off"
      layout="vertical"
    >
      <div className="flex gap-1 items-center justify-between">
        <Form.Item<string>
          label="İsim"
          name="name"
          rules={[{ required: true, message: "İsim alanı zorunludur!" }]}
          className="basis-1/2"
        >
          <Input
            prefix={<UserOutlined className="text-gray-400" />}
            placeholder="İsim"
          />
        </Form.Item>

        <Form.Item<string>
          label="Soyisim"
          name="surname"
          rules={[{ required: true, message: "Soyisim alanı zorunludur!!" }]}
          className="basis-1/2"
        >
          <Input
            placeholder="Soyisim"
            prefix={<UserOutlined className="text-gray-400" />}
          />
        </Form.Item>
      </div>
      <Form.Item<string>
        label="Kullanıcı Adı"
        name="username"
        rules={[{ required: true, message: "Kullanıcı Adı Zorunludur!" }]}
      >
        <Input
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
          placeholder="Şifre"
          prefix={<LockOutlined className="text-gray-400" />}
        />
      </Form.Item>
      <Form.Item name="birthDate" label="Doğum Tarihi" className="basis-full">
        <DatePicker
          format="YYYY-MM-DD"
          className="w-full"
          placeholder="Doğum Tarihi"
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
}

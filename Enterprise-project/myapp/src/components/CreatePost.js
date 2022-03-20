import React from "react";
// , { useState, useEffect }
import { Form, Input, Checkbox, Button } from "antd";
// const { Option } = Select;

const CreatePostForm = () => {
  const [form] = Form.useForm();

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };

  return (
    <Form form={form} name="dynamic_rule">
      <Form.Item
        {...formItemLayout}
        name="TITLE"
        label="TITLE"
        rules={[
          {
            required: true,
            message: "Please input Title",
          },
        ]}
      >
        <Input placeholder="Please input Title" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        name="DESCRIPTION"
        label="DESCRIPTION"
        rules={[
          {
            required: true,
            message: "Please input Description",
          },
        ]}
      >
        <Input placeholder="Please input Description" />
      </Form.Item>

      <Form.Item
        name="CONTENT"
        label="CONTENT"
        rules={[
          {
            required: true,
            message: "Please input Content",
          },
        ]}
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read and agree the <a href="#">Term & Condition</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" href="/" onclick="">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePostForm;

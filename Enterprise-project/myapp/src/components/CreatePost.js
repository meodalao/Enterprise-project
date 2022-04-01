import React from "react";
import "antd/dist/antd.css";
// , { useState, useEffect }
import { Form, Input, Checkbox, Button, Upload, Divider } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const CreatePostForm = () => {
  const [form] = Form.useForm();
  const tailFormItemLayout = {
    wrapperCol: {
      padding: 30,
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        padding: 30,
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
    <>
      <Divider orientation="left">Managing Your Post</Divider>
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
          name="Content"
          label="Content"
          rules={[
            {
              required: true,
              message: "Please input Content",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item label="Dragger">
          <Form.Item
            name="dragger"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger
              name="files"
              action="/upload.do"
              {...formItemLayout}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </Form.Item>
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
            By clicking the button below you acknowledge that you have read and
            agreed to our <a href="#">provacy privacy & term </a> and want to
            post your ideas
            {/* <a href="#">Term & Condition</a> */}
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" href="/" onclick="">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreatePostForm;

import { Form, Input, Button, Checkbox, Select, Divider } from "antd";
import "antd/dist/antd.css";
import React from "react";
// import { useGoogleAuth } from "./googleAuth";
// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { SignIn } from "../../store/modules/auth/actions/authAction";

const { Option } = Select;

// const Login = () => {
//   const currentState = useSelector((state) => state.Auth);

//   const [user, setUser] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
//   const dispatch = useDispatch();

//   const userLogin = (credentials) => dispatch(SignIn(credentials));

//   const handleChange = (e) => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const submitUser = (e) => {
//     e.preventDefault();
//     userLogin({
//       email: user.email,
//       password: user.password,
//     });
//   };

//   // if(currentState.isAuthenticated){
//   //   return <Redirect to='/' />
//   // }
// };

// function handleChange(value) {
//   console.log(`selected ${value}`);
// }

const NormalLoginForm = () => {
  // const { signIn } = useGoogleAuth();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
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

  return (
    <>
      <Divider orientation="left">Logging Your Account </Divider>
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="Role"
          label="Role"
          rules={[{ required: true, message: "Please select Role" }]}
        >
          <Select placeholder="select your Role">
            <Option value="Admin">Admin</Option>
            <Option value="Staff">Staff</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="Dep"
          label="Department"
          rules={[{ required: true, message: "Please select Department" }]}
        >
          <Select placeholder="select your Department">
            <Option value="IT">IT</Option>
            <Option value="Business">Business</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("Please fill the Form")),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            REMEMBER ME<a href="#"> FORGOT PASSWORDS</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            LOGIN
          </Button>
          {/* Or <button onClick={signIn}>Login</button> */}
        </Form.Item>
      </Form>
    </>
  );
};

export default NormalLoginForm;

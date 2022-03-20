import { Form, Input, Button, Checkbox, Select } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { Select } from "antd";
import { SignIn } from '../../store/modules/auth/actions/authAction';

const Login = () => {

    const currentState = useSelector((state) => state.Auth);
  
    const [user, setUser] = useState({
      email: '',
      password: ''
    });
    const dispatch = useDispatch()
  
    const userLogin = (credentials) => dispatch(SignIn(credentials))
  
  
    const handleChange = e => {
      setUser({
        ...user,
        [e.target.name]: e.target.value
      })
    }
    const submitUser = (e) => {
      e.preventDefault()
      userLogin({
        email: user.email,
        password: user.password
      });
    }
  
    if(currentState.isAuthenticated){
      return <Redirect to='/' />
    }
}

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const NormalLoginForm = () => {
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

      <Select
        {...tailFormItemLayout}
        defaultValue="Role"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="Admin">Admin</Option>
        <Option value="Staff">Staff</Option>
      </Select>

      <Select
        {...tailFormItemLayout}
        defaultValue="Department"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="IT">IT</Option>
        <Option value="Business">Business</Option>
      </Select>

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
          REMEMBER ME<a href=""> FORGOT PASSWORDS</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          LOGIN
        </Button>
        Or <a href="#register">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default NormalLoginForm;

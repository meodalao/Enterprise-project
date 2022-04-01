import { Col, Layout, Row, Input, Menu, message, Dropdown } from "antd";
import React from "react";
import "antd/dist/antd.css";
// import { useDispatch, useSelector } from "react-redux";
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";
import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";
// import { Posts } from "../redux/Post/index";
const { Header } = Layout;
const { Search } = Input;
const NavbarComponent = () => {
  //   const { data } = useSelector((state) => state.posts);
  //   const [dataSearch, setDataSearch] = useState("");
  //   const dispatch = useDispatch();
  //   const search = (dataSearch) => {
  //     dispatch(Posts.actions.searchPosts({ dataSearch }));
  //   };

  // const fromStoredData = (storageData) => JSON.parse(storageData);
  // const cart = fromStoredData(localStorage.getItem("cart")) || [];

  function handleButtonClick(e) {
    message.info("Click on left button.");
    console.log("click left button", e);
  }

  function handleMenuClick(e) {
    message.info("Add categories to current post");
    console.log("click", e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<PlusCircleOutlined />}>
        Create New Post
      </Menu.Item>
      <Menu.Item key="2" icon={<DownOutlined />}>
        See My Post
      </Menu.Item>
      <Menu.Item key="3" icon={<DownOutlined />}>
        See My Department
      </Menu.Item>
      <Menu.Item key="4" icon={<DownOutlined />}>
        See My Role
      </Menu.Item>
      <Menu.Item key="5" icon={<DownOutlined />}></Menu.Item>
    </Menu>
  );
  const nume = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<DownOutlined />}>
        CreateNewPost
      </Menu.Item>
      <Menu.Item key="2" icon={<DownOutlined />}>
        SeeMyPost
      </Menu.Item>
      <Menu.Item key="3" icon={<DownOutlined />}>
        SeeAllPost
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header
        className="header"
        style={{
          height: "40%",
          backgroundColor: "#f6ffed",
          padding: "0px",
        }}
      >
        <Row className="" align="middle" justify="space-between">
          <Col
            pull={2}
            xs={24}
            sm={16}
            md={12}
            lg={6}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <img src={logo} width="100" height="50%" alt="" />
            </Link>
          </Col>
          <Col
            pull={4}
            xs={18}
            md={12}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Search
              placeholder="Search"
              allowClear
              enterButton
              size="large"
              // onSearch={(value) => search(value)}
            />
          </Col>
          <Col
            xs={6}
            md={12}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
              Staff
            </Dropdown.Button>
          </Col>
          <Col
            xs={6}
            md={12}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Dropdown.Button onClick={handleButtonClick} overlay={nume}>
              Admin
            </Dropdown.Button>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default NavbarComponent;

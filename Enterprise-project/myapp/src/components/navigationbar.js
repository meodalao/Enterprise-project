import { Button, Col, Layout, Row, Input } from "antd";
import React from "react";
import "antd/dist/antd.css";
// import { useGoogleAuth } from "./googleAuth";
// import { useDispatch, useSelector } from "react-redux";
import logo from "../Assets/img/logo.png";
import { Link } from "react-router-dom";
// import { Posts } from "../redux/Post/index";
const { Search } = Input;
const { Header } = Layout;

const NavbarComponent = () => {
  // const { signIn } = useGoogleAuth();
  //   const { data } = useSelector((state) => state.posts);
  //   const [dataSearch, setDataSearch] = useState("");
  //   const dispatch = useDispatch();
  //   const search = (dataSearch) => {
  //     dispatch(Posts.actions.searchPosts({ dataSearch }));
  //   };

  // const fromStoredData = (storageData) => JSON.parse(storageData);
  // const cart = fromStoredData(localStorage.getItem("cart")) || [];

  return (
    <Layout>
      <Header
        className="header"
        style={{ height: "40%", backgroundColor: "#f6ffed", padding: "0px" }}
      >
        <Row className="" align="middle" justify="space-between">
          <Col
            // span={6}
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
            <Link to="localhost:3000/">
            <img src={logo} width="200" height="80%" alt="" />
            </Link>
          </Col>
          <Button
            shape="round"
            type="link"
            style={{
              width: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            href="localhost:3000/create-post"
          >
            Create Post
          </Button>
          <Col
            // span={6}
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
            // span={6}
            xs={6}
            md={12}
            lg={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              shape="round"
              type="link"
              style={{
                width: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="localhost:3000/login"
            >
              Login
            </Button>
            <Button
              shape="round"
              type="primary"
              style={{
                width: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}

            >
              Google Login
            </Button>
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default NavbarComponent;

import { Button, Col, Input, Layout, Row } from "antd";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import logo from "../Assets/img/logo.png";
// import { Link } from "react-router-dom";
// import { Posts } from "../redux/Post/index";

const { Search } = Input;
const { Header } = Layout;

const NavbarComponent = () => {
//   const { data } = useSelector((state) => state.posts);
//   const [dataSearch, setDataSearch] = useState("");
//   const dispatch = useDispatch();
//   const search = (dataSearch) => {
//     dispatch(Posts.actions.searchPosts({ dataSearch }));
//   };

// const fromStoredData = (storageData) => JSON.parse(storageData);
// const cart = fromStoredData(localStorage.getItem("cart")) || [];


  return (
    <Layout >
      <Header
        className="header"
        style={{ height: "30%", backgroundColor: "#ececec", padding: "0px" }}
      >
        <Row
          className="" align="middle" justify="space-between" >
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
            {/* <Link to="/"> */}
              <img src={logo} width="200" height="50%"  alt=""/>
            {/* </Link> */}
          </Col>
          <Button
              type="primary"
              style={{  width: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center", }}
              // href="/login"
            >Create Post</Button>
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
            {/* <Badge count={cart.length}> */}
            <Button
              // shape="circle"
              type="primary"
              style={{  width: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center", }}
              // href="/login"
            >Login</Button>
            {/* </Badge> */}
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default NavbarComponent;
import { Row, Col, Divider, Button, Menu, Dropdown } from "antd";
import React from "react";
import {
  InfoOutlined,
  EditOutlined,
  DeleteOutlined,
  // DownOutlined,
  PlusOutlined,
} from "@ant-design/icons";

const style = {
  backgroundColor: "",
  padding: "8px 0px",
  marginLeft: "80px",
};

const UserManagementColumn = () => {
  // function handleButtonClick(e) {
  //   message.info("Click on left button.");
  //   console.log("click left button", e);
  // }

  // function handleMenuClick(e) {
  //   message.info("Add categories to current post");
  //   console.log("click", e);
  // }

  const mune = (
    <Menu>
      <Menu.Item key="1" icon={<EditOutlined />}>
        <a target="_blank" rel="noopener noreferrer" href="/">
          Edit this user
        </a>
      </Menu.Item>
      <Menu.Item key="2" icon={<DeleteOutlined />}>
        <a target="_blank" rel="noopener noreferrer" href="/">
          Delete this user
        </a>
      </Menu.Item>
      <Menu.Item key="3" icon={<PlusOutlined />}>
        <a target="_blank" rel="noopener noreferrer" href="/">
          Add New User
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Divider orientation="left">User Managagement</Divider>
      <Row gutter={[48, 16]}>
        <Col className="gutter-row" span={4}>
          <div style={style}>#ID</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Username/Nickname</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Email</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Role</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Department</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Button icon={<InfoOutlined />}></Button>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}># 1</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Barry Allen</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>theflash@gmail.com</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Role</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Department</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Dropdown overlay={mune} placement="bottom" arrow>
              <Button icon={<EditOutlined />}></Button>
            </Dropdown>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}># 2</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>CowsSep</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Cowsep@gmail.com</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Role</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Department</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Dropdown overlay={mune} placement="bottom" arrow>
              <Button icon={<EditOutlined />}></Button>
            </Dropdown>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}># 3</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Bruce Willis</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Bruce@gmail.com</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Role</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Department</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Dropdown overlay={mune} placement="bottom" arrow>
              <Button icon={<EditOutlined />}></Button>
            </Dropdown>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}># 4</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Bruce Wayne</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>thebatman@gmail.com</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Role</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Department</div>
        </Col>
        <Col className="gutter-row" span={64}>
          <div style={style}>
            <Dropdown overlay={mune} placement="bottom" arrow>
              <Button icon={<EditOutlined />}></Button>
            </Dropdown>
          </div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}># 5</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Barry Allen</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>theflash@gmail.com</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Role</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>Department</div>
        </Col>
        <Col className="gutter-row" span={4}>
          <div style={style}>
            <Dropdown overlay={mune} placement="bottom" arrow>
              <Button icon={<EditOutlined />}></Button>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </>
  );
};
export default UserManagementColumn;

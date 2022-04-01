import React from "react";
import info from "./Popup";
import { Col, Layout } from "antd";
import CopyrightOutlined from "@ant-design/icons";
const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer>
      <Col
        href="#"
        onClick={info}
        align="middle"
        justify="space-between"
        icon={<CopyrightOutlined />}
      >
        Made with Love
      </Col>
    </Footer>
  );
};
export default FooterComponent;

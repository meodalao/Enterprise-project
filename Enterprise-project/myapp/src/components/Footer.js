import React from "react";
import info from "./Popup";
import { Col, Layout } from "antd";
const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer>
      <Col href="#" onClick={info} align="middle" justify="space-between">
        Made with Love ♥
      </Col>
    </Footer>
  );
};
export default FooterComponent;

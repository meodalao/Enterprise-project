import React, { useEffect } from "react";
import { Button, Typography, Pagination, Card, List } from "antd";
import { Products } from "../redux/Product/index.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoriesList from "./Categories";
import "../assets/css/ProductsList.css";
import { Content } from "antd/lib/layout/layout";
import { UndoOutlined } from "@ant-design/icons";

const { Meta } = Card;

const { Title } = Typography;

const refreshPage = ()=>{
  window.location.reload();
}

const ProductsList = () => {
  const { data } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Products.actions.getProducts());
  }, [dispatch]);

  return (
    <div>
      <CategoriesList />
      <Content style={{ backgroundColor: '#fff', margin: '0 80px' }}>
        <Title style={{ paddingLeft: 70, paddingTop: 30, opacity: 0.5 }} level={3}>Sản Phẩm
        <Button style={{marginLeft: 10}}shape="circle" onClick={refreshPage}><UndoOutlined /></Button>
        </Title>
        <List
          grid={{
            gutter: 16,
            columns: 5,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <Link to={`/products/${item.id}`}>
                <Card align="middle"
                  hoverable
                  style={{ width: 230, marginTop: 20, marginBottom: 30 }}
                  cover={<img alt="product" src={item.image1} />}
                >
                  <Link to={`/products/${item.id}`}>
                    <Meta title={item.title} description= {"$" + item.price} />
                  </Link>
                </Card>
              </Link>
            </List.Item>
          )}
        />
        <Pagination className="ant-pagination" style={{ marginBottom: 30 }} defaultCurrent={1} total={2} />
      </Content>
    </div>
  );
};

export default ProductsList;
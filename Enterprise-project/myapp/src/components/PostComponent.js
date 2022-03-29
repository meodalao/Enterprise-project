import { List, Avatar, Tooltip, Comment, Button } from "antd";
import React, { createElement, useState } from "react";
import {
  LikeOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import moment from "moment";
import { Menu, message, Dropdown} from 'antd';
import {  DownOutlined } from '@ant-design/icons';

// import Demo from "./comment";

// const refreshPage = ()=>{
//   window.location.reload();
// }

const PostList = () => {
  const listData = [];
  for (let i = 0; i < 30; i++) {
    listData.push({
      href: "#",
      title: `Top brilliant Ideas ${i}`,
      avatar: "https://joeschmoe.io/api/v1/random",
      description:
        "Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.",
      content:
        "Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.",
    });
  }

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    // <Button href="" onClick={(Demo)} alert=":"THIS FEATURE COMING SOON" >
    <Button
      key="comment-basic-reply-to"
      onClick={(Demo) => alert("THIS FEATURE COMING SOON")}
      href="localhost:3000/comment"
    >
      <span key="comment-basic-reply-to">COMMENT</span>
    </Button>,
  ];

  
function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Add categories to current post');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<DownOutlined />}>
      Funny
    </Menu.Item>
    <Menu.Item key="2" icon={<DownOutlined />}>
      Most Like
    </Menu.Item>
    <Menu.Item key="3" icon={<DownOutlined />}>
      Most View
    </Menu.Item>
  </Menu>
);


  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={listData}
      footer={
        <div>
          <b></b>
        </div>
      }
      renderItem={(item) => (
        <List.Item
          key={item.title}
          actions={actions}
          // extra={
          //   <img
          //     width={272}
          //     alt="logo"
          //     // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          // />
          // }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
          <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
            Categories
          </Dropdown.Button>  
          <Comment
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default PostList;

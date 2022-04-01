import { List, Avatar, Tooltip, Comment, Button, Modal } from "antd";
import React, { createElement, useState } from "react";
import {
  LikeOutlined,
  DislikeOutlined,
  DislikeFilled,
  LikeFilled,
  CommentOutlined,
  EditOutlined,
  DeleteOutlined,
  SmileOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import moment from "moment";
import { Menu, message, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import avatarlogo from "../Assets/img/default.png";
import CommentSection from "./comment";
import rabit from "../Assets/img/rabiit.jpg";
// import App from "./comment";

// import Demo from "./comment";

// const refreshPage = ()=>{
//   window.location.reload();
// }
//

function handleMenuClick(e) {
  message.info("Add categories to current post");
  console.log("click", e);
}

const mune = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<SmileOutlined />}>
      Funny
    </Menu.Item>
    <Menu.Item key="2" icon={<LikeOutlined />}>
      Most Like
    </Menu.Item>
    <Menu.Item key="3" icon={<DislikeOutlined />}>
      Most Dislike
    </Menu.Item>
    <Menu.Item key="4" icon={<EditOutlined />}>
      Edit this post
    </Menu.Item>
    <Menu.Item key="5" icon={<DeleteOutlined />}>
      Delete this post
    </Menu.Item>
    <Menu.Item key="6" icon={<DownOutlined />}>
      Others
    </Menu.Item>
  </Menu>
);

const PostList = () => {
  const listData = [];
  for (let i = 0; i < 50; i++) {
    listData.push({
      href: "#",
      title: `Top brilliant Ideas ${i}`,
      // avatar: "https://joeschmoe.io/api/v1/random",
      description: "Top description",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, libero quis auctor fermentum, lorem ex feugiat mi, cursus fringilla elit augue in eros. Vivamus id est erat. In et posuere lorem. Nunc consequat ligula eget venenatis consectetur. Vestibulum feugiat libero sit amet lacus maximus, a rhoncus purus lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi quis ornare nunc. Nunc sollicitudin finibus tortor, vitae scelerisque ex sagittis auctor. In hendrerit consequat nisl, id accumsan erat venenatis ut. Sed commodo scelerisque ipsum, vitae eleifend turpis maximus in. Nunc ante sem, blandit in justo quis, ultricies feugiat lacus. Maecenas sed porta est. Nulla facilisi. Vivamus sit amet fringilla mi.",
    });
  }
  //modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
    //comment button
    <>
      <Button type="primary" onClick={showModal} icon={<CommentOutlined />}>
        Comment
      </Button>
      <Modal
        title="Comment Section"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Comment
          // actions={actions}
          author={<a>TOP COMMENT </a>}
          avatar={<Avatar src={avatarlogo} alt="avatar" />}
          content={
            <p>
              This Ideas is very stupid.
              <Button onClick={CommentSection}></Button>
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={like}>
            {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
            <span className="comment-action">{likes}</span>
          </span>
        </Tooltip>
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={dislike}>
            {React.createElement(
              action === "disliked" ? DislikeFilled : DislikeOutlined
            )}
            <span className="comment-action">{dislikes}</span>
          </span>
        </Tooltip>
      </Modal>
    </>,
  ];

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
          style={{ marginLeft: "40px" }}
          key={item.title}
          actions={actions}
          extra={
            <img
              width={272}
              alt="logo"
              // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              src={rabit}
            />
          }
        >
          <List.Item.Meta>
            <Dropdown
              // onClick={handleButtonClick}
              overlay={mune}
              placement="bottom"
              arrow
              style={{ marginLeft: "1px" }}
            >
              <Button icon={<MinusOutlined />}></Button>
            </Dropdown>
          </List.Item.Meta>
          <List.Item.Meta
            style={{ marginLeft: "40px" }}
            avatar={<Avatar src={avatarlogo} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
          <Comment
            style={{ marginLeft: "40px" }}
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().toNow()}</span>
              </Tooltip>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default PostList;

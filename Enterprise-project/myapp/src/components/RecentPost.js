// import { List, Avatar,Tooltip, Comment,Layout } from 'antd';
// import React, { createElement, useState } from 'react';
// import {  LikeOutlined,  DislikeOutlined, DislikeFilled, LikeFilled, } from '@ant-design/icons';
// import 'antd/dist/antd.css';
// import moment from 'moment';

// // const refreshPage = ()=>{
// //   window.location.reload();
// // }
// const {Sider} = Layout;


// const RecentPost = () => {
  
// const listData = [] ;
// for (let i = 0; i < 5; i++) {
//   listData.push({
//     href: 'https://ant.design',
//     title: `Top stupid Ideas ${i}`,
//     avatar: 'https://joeschmoe.io/api/v1/random',
//     description:
//       'Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.',
//     content:
//       'Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.Mot y tuong qua tuyet voi.',
//   });
// }

// const [likes, setLikes] = useState(0);
//   const [dislikes, setDislikes] = useState(0);
//   const [action, setAction] = useState(null);

//   const like = () => {
//     setLikes(1);
//     setDislikes(0);
//     setAction('liked');
//   };

//   const dislike = () => {
//     setLikes(0);
//     setDislikes(1);
//     setAction('disliked');
//   };

//   const actions = [
//     <Tooltip key="comment-basic-like" title="Like">
//       <span onClick={like}>
//         {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
//         <span className="comment-action">{likes}</span>
//       </span>
//     </Tooltip>,
//     <Tooltip key="comment-basic-dislike" title="Dislike">
//       <span onClick={dislike}>
//         {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
//         <span className="comment-action">{dislikes}</span>
//       </span>
//     </Tooltip>,
//     <span key="comment-basic-reply-to" >Reply to</span>,
//   ];

// return(
//     <Sider>
//   <List
//     // itemLayout="vertical"
//     // size="large"
//     // pagination={{
//     //   onChange: page => {
//     //     console.log(page);
//     //   },
//     //   pageSize: 5,
//     // // }} */}
//     dataSource={listData}
//     footer={
//       <div>
//         <b></b> 
//       </div>
//     }
//     renderItem={item => (
//       <List.Item
//         key={item.title}
//         actions={actions}
       
//         // extra={
//         //   <img
//         //     width={272}
//         //     alt="logo"
//         //     // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
//         //   />
//         // }
//       >
//         <List.Item.Meta
//           avatar= { <Avatar src={item.avatar}  />} 
//           title={<a href={item.href}>{item.title}</a>}
//           description={item.description}
//         />
//         {item.content}
//         <Comment
//         datetime={
//             <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
//               <span>{moment().fromNow()}</span>
//             </Tooltip>
//           }
//           />
//       </List.Item>
//     )}
//   />
//   </Sider>
// );
// };

// export default RecentPost;

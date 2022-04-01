import React from "react";
// import routes from './router';
// import { useRoutes } from 'react-router-dom'
import "./App.css";
// import Content from "./components/Content";
import NavbarComponent from "./components/navigationbar";
import Footer from "./components/Footer";
import NormalLoginForm from "./components/LoginForm";
// import RecentPost from "./components/RecentPost";
import PostList from "./components/PostComponent";
// import CommentSection from "./components/comment";
import CreatePostform from "./components/CreatePost";
import UserManagementColumn from "./components/UserManagement";
import EditableTagGroup from "./components/tagcate";

function App() {
  // const routers = useRoutes([routes]);
  return (
    <>
      <div className="App" style={{ backgroundColor: "#ececec" }}>
        <NavbarComponent />
        <br></br>
        <CreatePostform />
        <PostList />
        <EditableTagGroup />
        <UserManagementColumn />
        <br></br>
        <br></br>
        <NormalLoginForm />
        {/* <CommentSection/>
        {/* <RecentPost/> */}
        {/* <Content>{routers}</Content>   */}
        <br></br>
        <br></br>
        <Footer />
      </div>
    </>
  );
}

export default App;

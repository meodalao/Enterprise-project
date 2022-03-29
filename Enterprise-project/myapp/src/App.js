import React from "react";
import routes from './router';
import { useRoutes } from 'react-router-dom'
import "./App.css";
import Content from "./components/Content";
import NavbarComponent from "./components/navigationbar";
import Footer from "./components/Footer";
import NormalLoginForm from "./components/LoginForm";
// import RecentPost from "./components/RecentPost";
import PostList from "./components/PostComponent";
import Demo from "./components/comment";
import CreatePostform from "./components/CreatePost";

function App() {
  let routers = useRoutes([routes]);
  return (
    <>
      <div className="App" style={{ backgroundColor: "#ececec" }}>
        <NavbarComponent />
        <PostList />
        <Demo />
        <CreatePostform/>
        <NormalLoginForm/>
        {/* <RecentPost/> */}
        <Content>{routers}</Content>  
        <Footer />
      </div>
    </>
  );
}

export default App;



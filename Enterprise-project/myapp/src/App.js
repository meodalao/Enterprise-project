import React from "react";
// import { useRouter } from 'next/router';
// import routes from './routes.js';
import "./App.css";
// import Content from "./components/Content";
import NavbarComponent from "./components/navigationbar";
import Footer from "./components/Footer";
import NormalLoginForm from "./components/LoginForm";
import RecentPost from "./components/RecentPost";
import PostList from "./components/DetailPostComponent";
import Demo from "./components/comment";
import CreatePostform from "./components/CreatePost";

function App() {
  // const routers = useRouter([routes]);
  return (
    <>
      <div className="App" style={{ backgroundColor: "#ececec" }}>
        <NavbarComponent />
        <br></br>
        <br></br>
        <PostList />
        {/* <RecentPost/> */}
        <Demo/>
        <CreatePostform/>
        <NormalLoginForm/>
        {/* <Content>{routers}</Content>   */}
        {/* <BackTop/> */}
        <br></br>
        <br></br>
        <Footer />
      </div>
    </>
  );
}

export default App;

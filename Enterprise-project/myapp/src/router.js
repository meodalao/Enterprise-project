import NormalLoginForm from "./components/LoginForm";
// import PostList from "./components/PostsList";
import PostComponent from "./components/PostComponent";
import CreatePostform from "./components/CreatePost";


const routes = [
  {
    path: "/",
    element: <PostComponent/>,
  },
  {
    path: "/posts/:id",
    element: <PostComponent/>,
  },
  {
    path: "/login",
    element: <NormalLoginForm/>,
  },
  {
    path: "/create-post",
    element: <CreatePostform/>,
  },
];

export default routes;

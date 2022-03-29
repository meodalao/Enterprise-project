import NormalLoginForm from "./components/LoginForm";
// import PostList from "./components/PostsList";
import DetailPost from "./components/PostComponent";
import CreatePostform from "./components/CreatePost";


const routes = [
  // {
    // path: "/",
    // element: <PostList />,
  // },
  {
    path: "/posts/:id",
    element: <DetailPost/>,
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

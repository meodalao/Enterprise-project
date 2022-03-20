import { appApi } from "../helpers/httpClient";

const api = process.env.REACT_APP_DOMAIN_API;

const getPosts = async () => {
  const url = `${api}/posts`;
  const response = await appApi.get(url);
  return response.data;
};

const searchPosts = async ({ dataSearch }) => {
  const url = `${api}/posts?q=${dataSearch}`;
  const response = await appApi.get(url);
  return response.data;
};

const getPostDetail = async (id) => {
  //get data product by id
  const url = `${api}/post/${id}`;
  const responsePost = await appApi.get(url);
};

//   //get category name
//   const { category_id } = responsePost.data;
//   const urlCategory = `${api}/categories/${category_id}`;
//   const responseCategory = await appApi.get(urlCategory);

//   const data = {
//     ...responsePost.data,
//     categoryName: responseCategory.data?.name,
//   };

//   return data;
// };

// const getPostsByCategoryId = async (id) => {
//   const url = `${api}/post?category_id=${id}`;
//   const response = await appApi.get(url);
//   return response.data;
// };

const PostServices = {
  getPosts,
  getPostDetail,
  searchPosts,
  // getPostsByCategoryId,
};

export { PostServices };

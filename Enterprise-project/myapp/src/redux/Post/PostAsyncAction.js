import {createAsyncThunk} from '@reduxjs/toolkit';
import {PostServices} from '../../services/ProductService';

const getPosts = createAsyncThunk('Posts/getPosts', () => {
  return PostServices.getPosts();
});

const searchPosts = createAsyncThunk('Posts/searchPosts', params => {
  console.log(params);
  return PostServices.searchProducts(params)
});

export const PostAsyncAction = {
    getPosts,
    searchPosts
};
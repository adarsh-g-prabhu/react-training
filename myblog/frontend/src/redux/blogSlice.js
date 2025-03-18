import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api'; 


export const fetchPosts = createAsyncThunk(
  'fetchPosts',
  async () => {
    const response = await api.get('/posts');
    return response.data;
  }
);

export const deletePost = createAsyncThunk(
    'deletePost',
    async (postId) => {
      await api.delete(`/posts/${postId}`);
      return postId;
    }
  );

const initialState = {
  posts: [],
  status: 'idle',  
  error: null,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      .addCase(deletePost.pending, (state) => {
        state.deleteStatus = 'loading';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.deleteStatus = 'succeeded';
        state.posts = state.posts.filter(post => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.deleteStatus = 'failed';
        state.deleteError = action.error.message;
      })
  },
});

export default blogSlice.reducer;

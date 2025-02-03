import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const fetchSlice = createSlice({
  name: 'fetch',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Create store
const store = configureStore({
  reducer: {
    response: fetchSlice.reducer,
  },
});

// Action creators
const { fetchStart, fetchSuccess, fetchFailure } = fetchSlice.actions;

export default function ReduxJson() {
  const response = useSelector((state) => state.response);
  const dispatch = useDispatch();

  const url = 'https://jsonplaceholder.typicode.com/posts'; // Example API

  const handleFetch = async () => {
    dispatch(fetchStart());
    try {
      const result = await axios.get(url);
      dispatch(fetchSuccess(result.data));
    } catch (error) {
      dispatch(fetchFailure(error.message));
    }
  };

  return (
    <div>
      <button onClick={handleFetch}>Fetch Data</button>
      
      {response.loading && <p>Loading...</p>}
      {response.error && <p>Error: {response.error}</p>}
      {response.data && (
        <div>
          <h3>Data:</h3>
          <pre>{JSON.stringify(response.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export { store };

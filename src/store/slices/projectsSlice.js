import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import projectRepository from '../../data/projectRepository';

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async (_, { rejectWithValue }) => {
  try {
    const projects = await projectRepository.fetchProjectsData();
    return projects;
  } catch (error) {
    return rejectWithValue('Failed to fetch projects');
  }
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload; 
      });
  },
});

export default projectsSlice.reducer;

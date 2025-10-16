// Data Layer: Handles API calls and repository logic for projects
// src/data/projectRepository.js

import apiService from '../utils/apiService';

const fetchProjectsData = async () => {
  try {
    const response = await apiService.get('/projects'); 
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch projects');
  }
};

const projectRepository = {
  fetchProjectsData,
};

export default projectRepository;

// src/store/slices/additionalInfoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  personalInfo: [
    { field: 'Name', value: 'John Doe' },
    { field: 'Email', value: 'john.doe@example.com' },
    { field: 'Phone', value: '+1 234 567 8901' },
    { field: 'Location', value: 'New York, USA' },
    { field: 'Profession', value: 'Software Engineer' },
  ],
  additionalInfo: [
    {
      id: 1,
      title: 'Certifications',
      description: 'AWS Certified Solutions Architect', 
      year: 2024,
    },
    {
      id: 2,
      title: 'Languages',
      description: 'English, Tamil, Hindi',
      year: '',
    },
    {
      id: 3,
      title: 'Volunteer Work',
      description: 'Local NGO, Tech Mentor',
      year: 2023            ,
    },
  ],
  data: [
    { id: 1, title: 'Sample Info 1', description: 'This is a sample description 1.' },
    { id: 2, title: 'Sample Info 2', description: 'This is a sample description 2.' },
    { id: 3, title: 'Sample Info 3', description: 'This is a sample description 3.' },
  ],
};

const additionalInfoSlice = createSlice({
  name: 'additionalInfo',
  initialState,
  reducers: {},
});

export default additionalInfoSlice.reducer;

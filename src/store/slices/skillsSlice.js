// src/store/slices/skillsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  skills: [
    { id: 1, category: 'Frontend', technology: 'React', proficiency: 'Expert', years: '3+' },
    { id: 2, category: 'Frontend', technology: 'JavaScript', proficiency: 'Expert', years: '4+' },
    { id: 3, category: 'Frontend', technology: 'HTML/CSS', proficiency: 'Expert', years: '4+' },
    { id: 4, category: 'Backend', technology: 'ASP.NET Core', proficiency: 'Expert', years: '2+' },
    { id: 5, category: 'Backend', technology: 'C#', proficiency: 'Expert', years: '3+' },
    { id: 6, category: 'Backend', technology: 'Web APIs', proficiency: 'Expert', years: '2+' },
    { id: 7, category: 'Cloud', technology: 'Azure', proficiency: 'Advanced', years: '2+' },
    { id: 8, category: 'Cloud', technology: 'AWS', proficiency: 'Intermediate', years: '1+' },
    { id: 9, category: 'DevOps', technology: 'Azure Pipelines', proficiency: 'Advanced', years: '2+' },
    { id: 10, category: 'DevOps', technology: 'Docker', proficiency: 'Intermediate', years: '1+' },
    { id: 11, category: 'Infrastructure', technology: 'Terraform', proficiency: 'Intermediate', years: '1+' },
    { id: 12, category: 'Database', technology: 'SQL Server', proficiency: 'Advanced', years: '3+' },
    { id: 13, category: 'Database', technology: 'MongoDB', proficiency: 'Intermediate', years: '1+' }
  ]
};

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    setSkills: (state, action) => {
      state.skills = action.payload;
    }
  }
});

export const { setSkills } = skillsSlice.actions;
export default skillsSlice.reducer;

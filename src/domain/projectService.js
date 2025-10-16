// Handles business logic for projects
// Domain Layer: src/domain/projectService.js

const mapProjectData = (projects, defaultImage) => {
  return projects.map(project => ({
    ...project,
    image: defaultImage 
  }));
};

const projectService = {
  mapProjectData,
};

export default projectService;

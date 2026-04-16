import Project from "../models/projectDTO.js";

export const createProjectService = async (data) => {
  return await Project.create(data);
};

export const getProjectByCodeService = async (code) => {
  return await Project.findOne({ code });
};

export const getAllProjectsService = async () => {
  return await Project.find({ isdelete: false });
};

export const updateProjectService = async (id, data) => {
  return await Project.findOneAndUpdate(
    { _id: id, isdelete: false },
    { ...data, updatedAt: new Date() },
    { new: true }
  );
};

export const deleteProjectService = async (id) => {
  return await Project.findOneAndUpdate(
    { _id: id, isdelete: false },
    { isdelete: true, updatedAt: new Date() },
    { new: true }
  );
};
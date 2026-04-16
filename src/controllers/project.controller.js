import {
  createProjectService,
  getProjectByCodeService,
  getAllProjectsService,
  updateProjectService,
  deleteProjectService
} from "../services/project.services.js";

export const createProject = async (req, res) => {
  try {
    await createProjectService(req.body);

    return res.status(201).json({
      code: 200,
      message: "Project created successfully.",
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: error.message,
      data: null
    });
  }
};

export const getProject = async (req, res) => {
  try {
    const code = req?.params?.code;

    if (code) {
      const project = await getProjectByCodeService(code);

      if (!project) {
        return res.status(404).json({
          code: 404,
          message: "Project not found",
          data: null
        });
      }

      if (project.isdelete) {
        return res.status(200).json({
          code: 200,
          message: "Project is deleted",
          data: null
        });
      }

      return res.status(200).json({
        code: 200,
        message: "Project fetched successfully.",
        data: { project }
      });
    }

    const projects = await getAllProjectsService();

    return res.status(200).json({
      code: 200,
      message: "Projects fetched successfully.",
      data: { projectList: projects }
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: error.message,
      data: null
    });
  }
};

export const updateProject = async (req, res) => {
  try {
    const project = await updateProjectService(req.body?.id, req.body);

    if (!project) {
      return res.status(404).json({
        code: 404,
        message: "Project not found or already deleted.",
        data: null
      });
    }

    return res.status(200).json({
      code: 200,
      message: "Project updated successfully.",
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: error.message,
      data: null
    });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await deleteProjectService(req.body?.id);

    if (!project) {
      return res.status(404).json({
        code: 404,
        message: "Project not found or already deleted.",
        data: null
      });
    }

    return res.status(200).json({
      code: 200,
      message: "Project deleted successfully.",
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      code: 500,
      message: error.message,
      data: null
    });
  }
};
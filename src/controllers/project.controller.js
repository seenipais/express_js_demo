import {
  createProjectService,
  getProjectByCodeService,
  getAllProjectsService,
  updateProjectService,
  deleteProjectService
} from "../services/project.services.js";
import { sendResponse } from "../utils/responseHandler.js";

export const createProject = async (req, res) => {
  try {
    await createProjectService(req.body);

    return sendResponse(res,{
      code: 200,
      message: "Project created successfully.",
      data: null
    });
  } catch (error) {
    return sendResponse(res,{
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
        return sendResponse(res,{
          code: 404,
          message: "Project not found",
          data: null
        });
      }

      if (project.isdelete) {
        return sendResponse(res,{
          code: 200,
          message: "Project is deleted",
          data: null
        });
      }

      return sendResponse(res,{
        code: 200,
        message: "Project fetched successfully.",
        data: { project }
      });
    }

    const projects = await getAllProjectsService();

    return sendResponse(res,{
      code: 200,
      message: "Projects fetched successfully.",
      data: { projectList: projects }
    });
  } catch (error) {
    return sendResponse(res,{
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
      return sendResponse(res,{
        code: 404,
        message: "Project not found or already deleted.",
        data: null
      });
    }

    return sendResponse(res,{
      code: 200,
      message: "Project updated successfully.",
      data: null
    });
  } catch (error) {
    return sendResponse(res,{
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
      return sendResponse(res,{
        code: 404,
        message: "Project not found or already deleted.",
        data: null
      });
    }

    return sendResponse(res,{
      code: 200,
      message: "Project deleted successfully.",
      data: null
    });
  } catch (error) {
    return sendResponse(res,{
      code: 500,
      message: error.message,
      data: null
    });
  }
};
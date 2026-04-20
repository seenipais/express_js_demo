import {
  createEmployeeService,
  getEmployeeService,
  updateEmployeeService,
  deleteEmployeeService
} from "../services/employee.services.js";

import { sendResponse } from "../utils/responseHandler.js";

export const createEmployee = async (req, res) => {
  try {
    await createEmployeeService(req.body);

    return sendResponse(res,{
      code: 200,
      message: "Employee created successfully.",
      data: null
    });
  } catch (err) {
    return sendResponse(res,{
      code :500,
      message: err.message,
      data: null
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const employee = await getEmployeeService(req.body);

    return sendResponse(res,{
      code: 200,
      message: "Employee fetched successfully.",
      data: {
        employeeList: employee
      }
    });
  } catch (err) {
    return sendResponse(res,{
      code :500,
      message: err.message,
      data: null
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const employee = await updateEmployeeService(req.body?.id, req.body);

    if (!employee) {
      return sendResponse(res,{
        code: 404,
        message: "Employee not found",
        data: null
      });
    }

    return sendResponse(res,{
      code: 200,
      message: "Employee updated successfully.",
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

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await deleteEmployeeService(req.body?.id);

    if (!employee) {
      return sendResponse(res,{
        code: 404,
        message: "Employee not found",
        data: null
      });
    }

    return sendResponse(res,{
      code: 200,
      message: "Employee deleted successfully.",
      data: null
    });
  } catch (error) {
    return sendResponse(res,{
      code :500,
      message: error.message
    });
  }
};
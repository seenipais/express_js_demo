import {
  createEmployeeService,
  getEmployeeService,
  updateEmployeeService,
  deleteEmployeeService
} from "../services/employee.services.js";

export const createEmployee = async (req, res) => {
  try {
    await createEmployeeService(req.body);

    return res.status(201).json({
      code: 200,
      message: "Employee created successfully.",
      data: null
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      data: null
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const employee = await getEmployeeService();

    return res.status(200).json({
      code: 200,
      message: "Employee fetched successfully.",
      data: {
        employeeList: employee
      }
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      data: null
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const employee = await updateEmployeeService(req.body?.id, req.body);

    if (!employee) {
      return res.status(404).json({
        code: 404,
        message: "Employee not found",
        data: null
      });
    }

    return res.status(200).json({
      code: 200,
      message: "Employee updated successfully.",
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

export const deleteEmployee = async (req, res) => {
  try {
    const employee = await deleteEmployeeService(req.body?.id);

    if (!employee) {
      return res.status(404).json({
        code: 404,
        message: "Employee not found",
        data: null
      });
    }

    return res.status(200).json({
      code: 200,
      message: "Employee deleted successfully.",
      data: null
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
import Employee from "../models/employeeDTO.js";

export const createEmployeeService = async (data) => {
  data.createdAt = new Date();
  return await Employee.create(data);
};

export const getEmployeeService = async (req) => {
  const query = { isdelete: false };

  if (req?.id) query._id = req.id;
  if (req?.employeeId) query.employeeId = req.employeeId;
  if (req?.role) query.role = req.role;
  if (req?.project) query.project = req.project;
  return await Employee.find(query);
};

export const updateEmployeeService = async (id, data) => {
  return await Employee.findByIdAndUpdate(id, data, { new: true });
};

export const deleteEmployeeService = async (id) => {
  return await Employee.findByIdAndUpdate(
    id,
    { isdelete: true, updatedAt: new Date() },
    { new: true }
  );
};
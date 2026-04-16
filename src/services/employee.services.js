import Employee from "../models/employeeDTO.js";

export const createEmployeeService = async (data) => {
  data.createdAt = new Date();
  return await Employee.create(data);
};

export const getEmployeeService = async () => {
  return await Employee.find();
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
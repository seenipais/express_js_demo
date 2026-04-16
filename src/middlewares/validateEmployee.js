import Employee from "../models/employeeDTO.js";

export const validateEmployee = async (req, res, next) => {
    try {
        const { name, email, role, employeeId } = req.body;

        if (!name || !email || !role || !employeeId) {
            return res.status(200).json({
                code: 400,
                message: "name, email, role, employeeId are required",
                data: null
            });
        }

        const allowedRoles = ["Developer", "Tester", "Manager"];
        if (!allowedRoles.includes(role)) {
            return res.status(200).json({
                code: 400,
                message: "Invalid role. Allowed: Developer, Tester, Manager",
                data: null
            });
        }

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(email)) {
            return res.status(200).json({
                code: 400,
                message: "Invalid email format",
                data: null
            });
        }

        const existingEmployee = await Employee.findOne({
            $or: [
                { email },
                { employeeId }
            ]
        });

        if (existingEmployee) {
            return res.status(200).json({
                code: 409,
                message: "Employee already exists (email or employeeId duplicate)",
                data: null
            });
        }
        next();

    } catch (error) {
        return res.status(200).json({
            code: 500,
            message: error.message,
            data: null
        });
    }
};
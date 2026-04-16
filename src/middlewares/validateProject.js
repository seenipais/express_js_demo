import Project from "../models/projectDTO.js";

export const validateProject = async (req, res, next) => {
    try {
        const { name, code } = req.body;

        if (!name || !code) {
            return res.status(200).json({
                code: 400,
                message: "name and code are required",
                data: null
            });
        }

        if (name.trim().length === 0 || code.trim().length === 0) {
            return res.status(200).json({
                code: 400,
                message: "name and code cannot be empty",
                data: null
            });
        }

        const existingProject = await Project.findOne({
            $or: [
                { name: name.trim() },
                { code: code.trim() }
            ]
        });

        if (existingProject) {
            return res.status(200).json({
                code: 409,
                message: "Project already exists (name or code duplicate)",
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
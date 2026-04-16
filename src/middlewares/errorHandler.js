export const errorHandler = (err, req, res, next) => {
    return res.status(500).json({
        code: 500,
        message: err.message || "Internal Server Error",
        data: null
    });
};
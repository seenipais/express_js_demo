export const sendResponse = (res, { code = 200, message = "", data = null }) => {
    return res.status(code).json({
        code,
        message,
        data
    });
};
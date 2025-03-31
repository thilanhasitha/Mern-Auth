export const errorHandler = (status, message) => {
    const error = new Error(message); // Set message directly
    error.status = status; // Use `status` instead of `statusCode`
    return error;
};

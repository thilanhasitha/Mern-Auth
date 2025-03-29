export const getusers = (req, res) => {
    try {
        res.status(200).json({
            msg: "All users are here"
        });
    } catch (error) {
        res.status(500).json({
            msg: "Something went wrong",
            error: error.message
        });
    }
};

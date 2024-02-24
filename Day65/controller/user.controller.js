const { getListUser, getDetailUser } = require("../services/user.service");

module.exports = {
    getListUser: async (req, res) => {
    const response = {};
    try {
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: await getListUser(),
      });
    } catch (error) {
      Object.assign(response, { status: 500, message: "Server Error" });
    }
    return res.status(response.status).json(response);
  },
  getDetailUser: async (req, res) => {
    const response = {};
    const { id } = req.params;
    try {
      Object.assign(response, {
        status: 200,
        message: "Success",
        data: await getDetailUser(id),
      });
    } catch (error) {
      Object.assign(response, { status: 500, message: "Server Error" });
    }
    return res.status(response.status).json(response);
  },
};

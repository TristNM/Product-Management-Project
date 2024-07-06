const SystemConfig = require("../../config/system.js");
const dashboardRoute= require("./dashboard.route.js");

module.exports = (app) => {
    const PATH_ADMIN = SystemConfig.prefixAdmin;
    app.use(PATH_ADMIN + "/dashboard", dashboardRoute);
} 
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes/routes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const app = express_1.default();
const port = 3000;
routes_1.RegisterRoutes(app);
// Swagger set up
app.use('/api/v1/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default, { explorer: true }));
app.listen(port, () => console.log(`Server started listening to port ${port}`));

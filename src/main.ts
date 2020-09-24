import express from 'express';
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

const app = express();
const port = 3000;

RegisterRoutes(app);

// Swagger set up
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, { explorer: true }));

app.listen(port, () => console.log(`Server started listening to port ${port}`));
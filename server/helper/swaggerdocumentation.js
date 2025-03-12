
import envConfig from "../config/envConfig.js"
import userDocsRoutes from "../routes/user/user.doc.js";
const swaggerdocumentation = {
  openapi: '3.1.0',
  info: {
    title: 'firbase api documentation',
    description: 'firbase aut api documentation',
    version: "1.0.0",
  },
  servers: [
    {
      url: `${envConfig.locahosturl}`,
      description: 'local server',
    },
    {
      url: `${envConfig.production_server_url}`,
    }
  ],
  tags: [
    {
      name: 'User',
    }
  ],
  paths: {
    ...userDocsRoutes,
  }
}

export default swaggerdocumentation;
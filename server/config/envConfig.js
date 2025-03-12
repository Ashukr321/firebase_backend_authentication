import { config } from 'dotenv'
config();
const envConfig = {
  port: process.env.PORT,
  locahosturl : process.env.LOCALHOST_URL,
  production_server_url:process.env.PRODUCTION_SERVER_URL,
  mongo_uri:process.env.MONGO_URI,
  db_name:process.env.DB_NAME,
}

export default envConfig;
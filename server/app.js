// import express depencies
import express from 'express';
import envConfig from './config/envConfig.js'
import cors from 'cors';
import helmet from 'helmet';
import mongoSantize from 'express-mongo-sanitize'
import connectDb from './config/connectDb.js';
import { fileURLToPath } from 'url';
import path from 'path';


// get dirname 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import routes 
import userRouute from './routes/user/user.routes.js'


// import swagger 
import swaggerDoc from 'swagger-ui-express';
import swaggerdocumentation from './helper/swaggerdocumentation.js'






// import middleware 
import gloablErrorHandler from './middleware/globalErrorHandler.js';
import limiter from './middleware/rateLimiter.js';


// create node server 
const app = express();

app.use(express.json());
// connect to database 
connectDb();

// configure routes 
const baseurl = '/api/v1';
app.use(`${baseurl}/user`,userRouute);

// configue static public 
app.use(express.static(path.join(__dirname, 'public')));

// configure ejs tempalte engine 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));


app.get('/', (req, res) => {
  res.render('index');
})


// applicaiton level mideleware 
app.use(limiter);

app.use(cors({
  origin: '*',
}));

app.use(helmet());
app.use(mongoSantize());

// configure swagger 
app.use('/docs', swaggerDoc.serve);
app.use('/docs', swaggerDoc.setup(swaggerdocumentation));


// routes
app.get('/', (req, res) => {
  res.json({
    message: "succes"
  })
})




// listen on port  
const port = envConfig.port || 4000;

// globalErrorHandler middleware
app.use(gloablErrorHandler);

//listen app  
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
})
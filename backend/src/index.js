import app from './app.js';
import logger from './config/logger.config.js';


const PORT = process.env.PORT || 5000


app.listen(PORT, ()=>logger.info("Server is up and running..."));



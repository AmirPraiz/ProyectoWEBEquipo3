import dotenv from 'dotenv';
dotenv.config();
export default {
    HOST: process.env.HOST || 'NO SE ENCONTRÓ LA VARIABLE DE ENTORNO',
    PORT: process.env.PORT || 'NO SE ENCONTRÓ EL PORT',
    API_URL: process.env.API_URL || '/api/v1',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'mongodb+srv://ermorenodu:mode8663@ecommerce.ccfqv.mongodb.net/db_ecommerce?retryWrites=true&w=majority',
    DATABASE: process.env.DATABASE || 'db_default', 
    DB_USER: process.env.DB_USER || 'admin', 
    DB_PASSWORD: process.env.DB_PASSWORD || '1234567890', 
}
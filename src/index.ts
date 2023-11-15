import express from "express"  //en la cual se va a correrr
import bodyParser from "body-parser"
import { Pool } from 'pg'      //para conectar con el postgres
import authRoutes from './routes/authRoutes'
import { sequelize } from './config/Sequelize.orm';
import bookRoutes from "./routes/bookRoutes";
const app = express();
const PORT = process.env.PORT || 8082;

app.use(bodyParser.json());

//rutas
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);


//conexion a base de datos
sequelize.sync().then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
    });
  });


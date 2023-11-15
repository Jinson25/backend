import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'yavibook',
  username: 'postgres',
  password: '123',
  host: 'localhost',
  port: 5432,
  models: [__dirname + '/../models'],
  define: {
    timestamps: true,
  },
});
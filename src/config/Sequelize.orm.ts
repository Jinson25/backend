import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('yavibook', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres',
});
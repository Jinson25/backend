import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/Sequelize.orm';

class Book extends Model {
    public id!: number;
    public title!: string;
    public author!: string;
    public genre!: string;
    public publishedDate!: string;
}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        Nombre_libro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        año_libro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion_libro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        editorial_libro: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Book',
    }
);

export default Book;
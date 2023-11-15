// user.model.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/Sequelize.orm';
import Role from './roleModel'; // Asegúrate de importar el modelo de Rol correctamente

class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'User',
    }
);

User.belongsTo(Role);
Role.hasMany(User);

export default User;

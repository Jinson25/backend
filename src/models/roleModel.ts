// roleModel.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/Sequelize.orm';

class Role extends Model {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Role',
  }
);

export default Role;

import Sequelize from 'sequelize';
import Todo from './todo.js';
import configs from '../config/config.cjs';

const env = process.env.NODE_ENV || 'development';

const config = configs[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

Todo(sequelize, Sequelize.DataTypes);

const models  = sequelize.models;

export { sequelize };

export default models;

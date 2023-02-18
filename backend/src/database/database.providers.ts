import { Sequelize } from 'sequelize-typescript';
//import { SequelizeTypescriptMigration } from "sequelize-typescript-migration";
import { Url } from '../url/entities/url.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'db',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'encurtador',
        omitNull: true
      });
      sequelize.addModels([Url]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
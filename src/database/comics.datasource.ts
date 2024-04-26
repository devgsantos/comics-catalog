import { DataSource , type DataSourceOptions} from 'typeorm';
import sqliteParams from './sqliteParams';
import * as entities from './entities';
import 'reflect-metadata';
import { Result } from './entities/comics.entities';

const dbName = "comics";

// const dataSourceConfig: DataSourceOptions = {
//   type: 'capacitor',
//   driver: sqliteParams.connection,
//   database: dbName,
//   mode: 'no-encryption',
//   entities: entities,
// //   migrations: migrations, //["../migrations/author/*{.ts,.js}"]
//   subscribers: [],
//   logging: [/*'query',*/ 'error','schema'],
//   synchronize: true,     // !!!You will lose all data in database if set to `true`
//   migrationsRun: false,  // Required with capacitor type
// };
// export const dataSourceComics = new DataSource(dataSourceConfig);
// const comicsDataSource = {
//   dataSource: dataSourceComics,
//   dbName: dbName,
//   entities: entities
// };

// export default comicsDataSource;

export const comicsDataSource = new DataSource({
  type: 'capacitor',
  driver: sqliteParams.connection,
  database: dbName,
  mode: 'no-encryption',
  entities: entities,
  migrations: [], //["../migrations/author/*{.ts,.js}"]
  subscribers: [],
  logging: [/*'query',*/ 'error','schema'],
  synchronize: true,     // !!!You will lose all data in database if set to `true`
  migrationsRun: false,  // Required with capacitor type
})
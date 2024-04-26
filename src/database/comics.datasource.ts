import { DataSource , type DataSourceOptions} from 'typeorm';
import sqliteParams from './sqliteParams';
import * as entities from './entities';
import { Result } from './entities/comics.entities';

const dbName = "comics";

const dataSourceConfig: DataSourceOptions = {
  type: 'capacitor',
  driver: sqliteParams.connection,
  database: dbName,
  mode: 'no-encryption',
  entities: [Result],
//   migrations: migrations, //["../migrations/author/*{.ts,.js}"]
  subscribers: [],
  logging: [/*'query',*/ 'error','schema'],
  synchronize: false,     // !!!You will lose all data in database if set to `true`
  migrationsRun: false  // Required with capacitor type
};
export const dataSourceComics = new DataSource(dataSourceConfig);
const comicsDataSource = {
  dataSource: dataSourceComics,
  dbName: dbName,
  entities: entities
};

export default comicsDataSource;
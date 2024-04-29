import 'reflect-metadata'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite';
import sqliteParams from './database/sqliteParams';
import comicsDataSource from './database/comics.datasource';
import { EventEmitter } from 'events';

customElements.define('jeep-sqlite', JeepSqlite);
EventEmitter.defaultMaxListeners = 500;

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));


const initializeDataSources = async () => {
  //check sqlite connections consistency
  await sqliteParams.connection.checkConnectionsConsistency()
  .catch((e) => {
    console.log(e);
    return {};
  });

  // Loop through the DataSources
  for (const mDataSource of [comicsDataSource]) {
    // initialize
    await mDataSource.dataSource.initialize();
    if (mDataSource.dataSource.isInitialized) {
      // run the migrations
      await mDataSource.dataSource.runMigrations();
    }
    if( sqliteParams.platform === 'web') {
      await sqliteParams.connection.saveToStore(mDataSource.dbName);
    }                    
  }     
}

if (sqliteParams.platform !== "web") {
  initializeDataSources();
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
} else {
  window.addEventListener('DOMContentLoaded', async () => {
      const jeepEl = document.createElement("jeep-sqlite");
      document.body.appendChild(jeepEl);
      customElements.whenDefined('jeep-sqlite').then(async () => {
        await sqliteParams.connection.initWebStore();
        await initializeDataSources();
        platformBrowserDynamic().bootstrapModule(AppModule)
        .catch(err => console.error(err));
      })
      .catch ((err) => {
        console.log(`Error: ${err}`);
        throw new Error(`Error: ${err}`)
      });
  });
}
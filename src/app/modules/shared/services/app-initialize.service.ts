import { Injectable } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import sqliteParams from '../../../../database/sqliteParams';
import { AppModule } from '../../../app.module';
import comicsDataSource from '../../../../database/comics.datasource';
import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite';


@Injectable({
  providedIn: 'root'
})
export class AppInitializeService {

  constructor() { }

  initializeApp(): Promise<void> {
    // Implemente aqui sua lógica de inicialização
    return new Promise((resolve, reject) => {
      if (sqliteParams.platform !== "web") {
        resolve();
      } else {
        window.addEventListener('DOMContentLoaded', async () => {
            const jeepEl = document.createElement("jeep-sqlite");
            document.body.appendChild(jeepEl);
            customElements.whenDefined('jeep-sqlite').then(async () => {
             
            })
            .catch ((err) => {
              console.log(`Error: ${err}`);
              throw new Error(`Error: ${err}`)
            });
        });
      }
    });
  }

  async initializeDataSources() {
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

}

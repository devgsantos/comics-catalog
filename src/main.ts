import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite';
import sqliteParams from './database/sqliteParams';
import comicsDataSource from './database/comics.datasource';
import { EventEmitter } from 'events';

customElements.define('jeep-sqlite', JeepSqlite);
EventEmitter.defaultMaxListeners = 500;

const initializeDataSources = async () => {
  try {
    // Verificar consistência das conexões SQLite
    await sqliteParams.connection.checkConnectionsConsistency();

    // Inicializar as fontes de dados
    for (const mDataSource of [comicsDataSource]) {
      await mDataSource.dataSource.initialize();
      if (mDataSource.dataSource.isInitialized) {
        await mDataSource.dataSource.runMigrations();
      }
      if (sqliteParams.platform === 'web') {
        await sqliteParams.connection.saveToStore(mDataSource.dbName);
      }
    }
  } catch (error) {
    console.error('Erro ao inicializar as fontes de dados:', error);
    throw error; // Lança o erro para interromper o processo, se necessário
  }
};

const bootstrapAppModule = async () => {
  try {
    // Inicializar as fontes de dados antes de inicializar o módulo Angular
    await initializeDataSources();

    // Bootstrap do módulo Angular após a inicialização das fontes de dados
    await platformBrowserDynamic().bootstrapModule(AppModule);
  } catch (error) {
    console.error('Erro ao inicializar o aplicativo:', error);
  }
};

// Iniciar o aplicativo de acordo com a plataforma
if (sqliteParams.platform !== 'web') {
  bootstrapAppModule(); // Inicializar diretamente para plataformas não-web
} else {
  // Para plataforma web, aguardar o carregamento do DOM antes de iniciar
  window.addEventListener('DOMContentLoaded', async () => {
    const jeepEl = document.createElement('jeep-sqlite');
    document.body.appendChild(jeepEl);
    customElements.whenDefined('jeep-sqlite').then(async () => {
      await sqliteParams.connection.initWebStore();
      await bootstrapAppModule(); // Iniciar o aplicativo após a inicialização da web store
    }).catch((err) => {
      console.error('Erro durante a inicialização da web store:', err);
    });
  });
}

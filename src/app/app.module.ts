import 'reflect-metadata';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SQLiteService } from '../database/services/sqlite.service';
import { DbnameVersionService } from '../database/services/dbname-version.service';
import { SerializeService } from '../database/services/serialize.service';
import { OrmService } from '../database/services/orm.service';
import { StorageService } from '../database/services/storage.service';
import { ComicsService } from './modules/shared/services/comics.service';
import { HttpClientModule } from '@angular/common/http';
import { AppInitializeService } from './modules/shared/services/app-initialize.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SQLiteService,
    DbnameVersionService,
    SerializeService,
    OrmService,
    StorageService,
    ComicsService,
    AppInitializeService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (appInitService: AppInitializeService) => () => appInitService.initializeApp(),
    //   multi: true,
    //   deps: [AppInitializeService]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

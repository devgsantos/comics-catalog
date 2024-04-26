import { Injectable } from '@angular/core';
import { SQLiteService } from '../../../../database/services/sqlite.service';
import { StorageService } from '../../../../database/services/storage.service';
import { Toast } from '@capacitor/toast';


@Injectable({
  providedIn: 'root'
})
export class InitializeAppService {

  isAppInit: boolean = false;
  platform!: string;

  constructor(
    private sqliteService: SQLiteService,
    private storageService: StorageService,
    ) {

  }

  async initializeApp() {
    const DB_USERS = 'comics'
    await this.storageService.initializeDatabase(DB_USERS);
  }
}

import { Component, OnInit } from '@angular/core';
import { InitializeAppService } from './modules/shared/services/initialize.app.service';
import { StorageService } from '../database/services/storage.service';
import { switchMap, of } from 'rxjs';
import { User } from '../database/models/user.model';
import { ComicsService } from './modules/shared/services/comics.service';
import { SerializeService } from '../database/services/serialize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'comics-catalog';
  userList: User[] = [];
  isWeb: any;

  constructor (
    private initializeAppService: InitializeAppService,
    private storageService: StorageService,
    private comisService: ComicsService,
    private serializeService: SerializeService
  ) {
   
  }

  ngOnInit(): void {
    // try {
    //   this.initializeAppService.initializeApp()
    //   .then(() => {
    //     this.getComicsData();
    //   });

    // } catch(err) {
    //   throw new Error(`Error: ${err}`);
    // }
    this.getComicsData();
  }

  getComicsData() {
    this.comisService.fetchDataFromWebService()
    .subscribe({
      next: response => {
        this.serializeService.insertDataFromWebService(response.data.results)
      }
    })
  }

}

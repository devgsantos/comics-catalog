import { Injectable } from '@angular/core';
import comicsDataSource from '../comics.datasource'; '../comics.datasource';
import { Result } from '../entities/comics.entities'

@Injectable()

export class SerializeService {
  
    constructor() {
    }

    async insertDataFromWebService(jsonData: any) {
        let resultRepository = comicsDataSource.dataSource.getRepository(Result);
        
        for (const item of jsonData) {
            const result = new Result();
            result.id = item.id;
            result.description = item.description;
            result.modified = item.modified;

            await resultRepository.save(item);
        }
        
    }
}
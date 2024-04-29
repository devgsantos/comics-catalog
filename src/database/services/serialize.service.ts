import { Injectable } from '@angular/core';
import comicsDataSource from '../comics.datasource';
import { iResult } from '../models/comics.model';
import { Result } from '../entities';
// import { Result } from '../entities';
@Injectable()

export class SerializeService {

    constructor(
        
    ) { }

    async insertDataFromWebService(jsonData: iResult[]) {
        let resultRespository = comicsDataSource.dataSource.getRepository(Result);

        for (const item of jsonData) {
            const result = new Result();
            result.id = item.id;
            result.description = item.description;
            result.modified = item.modified;
            result.name = item.name;
            result.resourceURI = item.resourceURI;
            await resultRespository.save(result);
        }
    }
}
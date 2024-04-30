import { Injectable } from '@angular/core';
import comicsDataSource from '../comics.datasource';
import { iResult } from '../models/comics.model';
import { Result } from '../entities';
import * as entities from '../entities/index';
@Injectable()

export class SerializeService {

    constructor(
        
    ) { }

    async insertDataFromWebService(jsonData: iResult[]) {
        let keyName = ''
        try {
            for (const key in entities) {
                keyName = key
                let repository = comicsDataSource.dataSource.getRepository(entities[key]);
    
                for (const item of jsonData) {
                    const result = new entities[key]();
                    for (const name in item) {
                        if (typeof item[name] !== 'object' && item[name] !== null && !Array.isArray(item[name])) {
                            result[name] = item[name]
                        }
                    }
                    await repository.save(result);
                }
            }
        } catch (error) {
            console.log('Erro na entidade: ' + keyName, error)
        }
    }
}
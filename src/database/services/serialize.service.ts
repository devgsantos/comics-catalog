import { Injectable } from '@angular/core';
import { comicsDataSource } from '../comics.datasource';
import { Result } from '../entities/comics.entities'
import { userList } from '../entities';
import { User } from '../models/user.model';

@Injectable()

export class SerializeService {
  
    constructor() {
    }

    // async insertDataFromWebService(jsonData: any) {
    //     let resultRepository = comicsDataSource.dataSource.getRepository(Result);
        
    //     for (const item of jsonData) {
    //         const result = new Result();
    //         result.id = item.id;
    //         result.description = item.description;

    //         await resultRepository.save(item);
    //     }
        
    // }

    async insertDataFromWebService(jsonData: any) {
        let resultRepository = comicsDataSource.getRepository(userList);
        let data: User[] = [
            {
                id: 1,
                active: 1,
                name: 'Usuário Um'
            },
            {
                id: 2,
                active: 1,
                name: 'Usuário Dois'
            }
        ];
        for (const item of data) {
            const result = new userList();
            result.name = item.name;

            await resultRepository.save(result);
        }
        
    }
}
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError} from "rxjs";
import  {FileOnDataBaseModel} from "src/app/shared/models/file-on-data-base-model";
import { environment } from "src/environments/environment";

@Injectable(
    {
        providedIn: 'root',
    }
)
export class FileManagementServiceDatabaseService {
    private readonly baseUrl = environment.baseApiUrl+'/FileManagement';
    constructor(private httpClient: HttpClient) {}


    getAllFile(): Observable<FileOnDataBaseModel[]> {
        const url = `${this.baseUrl}/GetAllFileOnDataBase`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new FileOnDataBaseModel(body));
                }),
                catchError(error => throwError('An error occured when processing Shop', error)))
    }
    uploadToDataBase(): Observable<FileOnDataBaseModel[]> {
        const url = `${this.baseUrl}/UploadToDataBase`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new FileOnDataBaseModel(body));
                }),
                catchError(error => throwError('An error occured when processing Shop', error)))
    }
    deleteFileFromDataBase(fileId: number) {
        const url = `${this.baseUrl}/DeleteFileOnDataBase/${fileId}`;
        return this.httpClient.delete(url); 
    }
    downloadFileFromDataBase(fileId: number) {
        const url = `${this.baseUrl}/DownloadFileFromDatabase/${fileId}`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new FileOnDataBaseModel(body));
                }),
                catchError(error => throwError('An error occured when processing Shop', error)))
    }
}


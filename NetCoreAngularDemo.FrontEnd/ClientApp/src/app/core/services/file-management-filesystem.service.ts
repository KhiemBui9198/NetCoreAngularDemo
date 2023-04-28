import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError} from "rxjs";
import  {FileOnDataBaseModel} from "src/app/shared/models/file-on-data-base-model";
import { environment } from "src/environments/environment";
import { FileOnFileSystemModel } from "src/app/shared/models/file-on-file-system-model";

@Injectable(
    {
        providedIn: 'root',
    }
)
export class FileManagementServiceFileSystemService {
    private readonly baseUrl = environment.baseApiUrl+'/FileManagement';
    constructor(private httpClient: HttpClient) {}


    getAllFile(): Observable<FileOnFileSystemModel[]> {
        const url = `${this.baseUrl}/GetAllFileOnFileSystem`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new FileOnFileSystemModel(body));
                }),
                catchError(error => throwError('An error occured when processing Shop', error)))
    }
    uploadToFileSystem(): Observable<FileOnFileSystemModel[]> {
        const url = `${this.baseUrl}/UploadToFileSystem`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new FileOnDataBaseModel(body));
                }),
                catchError(error => throwError('An error occured when processing Shop', error)))
    }
    deleteFileFromFileSystem(fileId: number) {
        const url = `${this.baseUrl}/DeleteFileFromFileSystem/${fileId}`;
        return this.httpClient.delete(url); 
    }
    downloadFileFromFileSystem(fileId: number) {
        const url = `${this.baseUrl}/DownloadFileFromFileSystem/${fileId}`;
        return this.httpClient
            .get(url)
            .pipe(
                map((body: any) => {
                    return body.map((body: any) => new FileOnDataBaseModel(body));
                }),
                catchError(error => throwError('An error occured when processing Shop', error)))
    }


}


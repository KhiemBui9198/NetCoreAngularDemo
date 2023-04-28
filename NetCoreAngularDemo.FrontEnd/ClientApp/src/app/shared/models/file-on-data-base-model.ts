import { Base } from "./base";

export class FileOnDataBaseModel extends Base  {
        Id: number;
        Name:string;
        FileType: number ;
        Extension: boolean;
        Description: string;
        Data: string;
        constructor (item: any = null){
          super(item)
          if(item){
            this.Id = item.id || item.Id;
            this.Name = item.name || item.Name;
            this.FileType = item.fileType || item.FileType;
            this.Extension = item.Extension || item.extension;
            this.Description = item.description || item.Description;
            this.Data = item.Data || item.Data
          }
        }
}
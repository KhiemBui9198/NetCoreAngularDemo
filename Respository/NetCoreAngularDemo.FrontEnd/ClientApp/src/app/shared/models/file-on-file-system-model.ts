import { Base } from "./base";

export class FileOnFileSystemModel extends Base  {
        Id: number;
        Name:string;
        FileType: number ;
        Extension: boolean;
        Description: string;
        FilePath :string;
        constructor (item: any = null){
          super(item)
          if(item){
            this.Id = item.id || item.Id;
            this.Name = item.name || item.Name;
            this.FileType = item.fileType || item.FileType;
            this.Extension = item.Extension || item.extension;
            this.Description = item.description || item.Description;
            this.FilePath = item.filePath || item.FilePath
          }
        }
}
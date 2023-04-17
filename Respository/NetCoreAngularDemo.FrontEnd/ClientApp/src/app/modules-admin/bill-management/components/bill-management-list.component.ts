import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmModel } from 'src/app/shared/models/dialog-confirm-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { LoaderService } from 'src/app/core/services/loader.service';
import { FileManagementServiceDatabaseService } from 'src/app/core/services/file-management-database.service';
import { FileOnFileSystemModel } from 'src/app/shared/models/file-on-file-system-model';
import { FileOnDataBaseModel } from 'src/app/shared/models/file-on-data-base-model';

@Component({
  selector: 'app-bill-management-list-component',
  templateUrl: '../pages/bill-management-list.component.html',
  styleUrls: ['../pages/bill-management-list.component.scss']
})
export class BillManagementListComponent implements OnInit {
  fileDatas: FileOnDataBaseModel[] = []
  constructor(    
    private fileManagementServiceDatabaseService:FileManagementServiceDatabaseService,
    private loaderService: LoaderService,
    private router: Router,
    private route: ActivatedRoute,
    public modalService: NgbModal) { }

  ngOnInit() {
    this.loaderService.startLoading('Loading...');
    this.fileManagementServiceDatabaseService.getAllFile().subscribe(
      (res: any) => {
        this.fileDatas = res;
       this.loaderService.finishLoading();
      }
    )
  }
}

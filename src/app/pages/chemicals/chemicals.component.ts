import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { ChemicalsService } from '../../@core/data/chemicals.service';
import { ConfirmationDialogComponent } from '../modal-overlays/dialog/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'ngx-chemicals',
  templateUrl: './chemicals.component.html',
  styleUrls: ['./chemicals.component.scss']
})
export class ChemicalsComponent implements OnInit {

  source: LocalDataSource = new LocalDataSource();
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true
      
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        hide:true,
        editable:false,
        addable: false,
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      symbol: {
        title: 'Symbol',
        type: 'string',
      },
      matterState: {
        title: 'Matter State',
        type: 'string',
      },
      construction: {
        title: 'Construction',
        type: 'string',
      },
    },
  };
  

  constructor(
    private service: ChemicalsService,
    private tosterService: NbToastrService,
    private dialogService: NbDialogService
    
    ) {
    
   }

  ngOnInit(): void {
    this.service.getChemicals().subscribe(res => {
      this.source.load(res);
    },err =>{
      this.tosterService.danger('Service Error', 'Error!')
    });
  }

  onEditConfirm(event): void{
    this.service.editChemicals(event.newData.id,event.newData).subscribe(res=>{
      event.confirm.resolve()
      event.confirm.reject()
    })
  }

  onDeleteConfirm(event): void {
    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        name: event.data.name,
      },
    }).onClose.subscribe(res=>{
      if (res) {
        this.service.deleteChemicals(event.data.id).subscribe(res =>{
          event.confirm.resolve();
          this.tosterService.success('Sucessfully Deleted the Chemical', 'Successful!')
        },err =>{
          this.tosterService.danger('Service Error', 'Error!')
        })
      } else {
        event.confirm.reject();
      }
    });
    
  }
  onCreateConfirm(event): void {
    
      this.service.postChemicals(event.newData).subscribe(res => {
        event.confirm.resolve();
        this.ngOnInit();
        this.tosterService.success('Sucessfully Added the Chemical', 'Successful!')
      }, err =>{
        this.tosterService.danger('Service Error', 'Error!')
      })

  }
}

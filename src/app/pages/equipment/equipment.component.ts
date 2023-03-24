import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { LocalDataSource } from 'ng2-smart-table';
import { EquipmentService } from '../../@core/data/equipment.service';
import { ConfirmationDialogComponent } from '../modal-overlays/dialog/confirmation-dialog/confirmation-dialog.component';
import { ImageThumbnailColumnComponent } from './image-thumbnail-column/image-thumbnail-column.component';

@Component({
  selector: 'ngx-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
updateValue($event: any) {
throw new Error('Method not implemented.');
}

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
      qty: {
        title: 'Quantity',
        type: 'number',
      },
      description: {
        title: 'Description',
        type: 'string',
      },
      photo: {
        title: 'Photo',
        type: 'custom',
        renderComponent: ImageThumbnailColumnComponent,
        editable:false,
        addable: false,
      },
    },
  };
  postEquipment: any;
inputClass: any;
cell: any;
  

  constructor(
    private service: EquipmentService,
    private tosterService: NbToastrService,
    private dialogService: NbDialogService
    
    ) {
    
   }

  ngOnInit(): void {
    this.service.getEquipment().subscribe(res => {
      this.source.load(res);
    },err =>{
      this.tosterService.danger('Service Error', 'Error!')
    });
  }
  getEquipment() {
    throw new Error('Method not implemented.');
  }

  onEditConfirm(event): void{
    this.service.editEquipment(event.newData.id,event.newData).subscribe(res=>{
      event.confirm.resolve()
      event.confirm.reject()
    })
  }
  editEquipment(id: any, newData: any) {
    throw new Error('Method not implemented.');
  }

  onDeleteConfirm(event): void {
    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        name: event.data.name,
      },
    }).onClose.subscribe(res=>{
      if (res) {
        this.service.deleteEquipment(event.data.id).subscribe(res =>{
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
  deleteEquipment(id: any) {
    throw new Error('Method not implemented.');
  }
  onCreateConfirm(event): void {
    
      this.service.postEquipment(event.newData).subscribe(res => {
        event.confirm.resolve();
        this.ngOnInit();
        this.tosterService.success('Sucessfully Added the Chemical', 'Successful!')
      }, err =>{
        this.tosterService.danger('Service Error', 'Error!')
      })

  }
  

}

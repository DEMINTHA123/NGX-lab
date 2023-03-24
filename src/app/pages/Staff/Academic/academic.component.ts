import { Component, OnInit, TemplateRef } from "@angular/core";
import { NbDialogService, NbToastrService } from "@nebular/theme";
import { LocalDataSource } from "ng2-smart-table";
import { AcademicService } from "../../../@core/data/academic.service";
import { ConfirmationDialogComponent } from "../../modal-overlays/dialog/confirmation-dialog/confirmation-dialog.component";

@Component({
    selector: 'ngx-academic',
    templateUrl: './academic.component.html',
    styleUrls: ['./academic.component.scss'],
  })
export class AcademicComponent implements OnInit {
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
        hide: true,
        editable:false,
        addable: false,
      },
      firstName: {
        title: 'First Name',
        type: 'string',
      },
      lastName: {
        title: 'Last Name',
        type: 'string',
      },
      email: {
        title: 'E-mail',
        type: 'string',
      },
      mobileNumber: {
        title: 'Mobile Number',
        type: 'string',
      },
      experties: {
        title: 'Expertise',
        type: 'string',
      },

    },
  };
  

  constructor(
    private service: AcademicService,
    private tosterService: NbToastrService,
    private dialogService: NbDialogService
    
    ) {
    
   }

  ngOnInit(): void {
    this.service.getAcademic().subscribe(res => {
      this.source.load(res);
    },err =>{
      this.tosterService.danger('Service Error', 'Error!')
    });
  }

  onEditConfirm(event): void{
    this.service.editAcademic(event.newData.id,event.newData).subscribe(res=>{
      event.confirm.resolve()
      event.confirm.reject()
    })
  }

  onDeleteConfirm(event): void {
    this.dialogService.open(ConfirmationDialogComponent, {
      context: {
        name: event.data.firstName,
      },
    }).onClose.subscribe(res=>{
      if (res) {
        this.service.deleteAcademic(event.data.id).subscribe(res =>{
          event.confirm.resolve();
          this.tosterService.success('Sucessfully Deleted an Academic Satff Member', 'Successful!')
        },err =>{
          this.tosterService.danger('Service Error', 'Error!')
        })
      } else {
        event.confirm.reject();
      }
    });
    
  }
  onCreateConfirm(event): void {
    var regexp = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    if(regexp.test(event.newData.email)){
      this.service.postAcademic(event.newData).subscribe(res => {
        event.confirm.resolve();
        this.ngOnInit();
        this.tosterService.success('Sucessfully Added an Academic Satff Member', 'Successful!')
      }, err =>{
        this.tosterService.danger('Service Error', 'Error!')
      })
    } else{this.tosterService.warning('Insert a Valied E-mail', 'Validation Error!')}
  }
}


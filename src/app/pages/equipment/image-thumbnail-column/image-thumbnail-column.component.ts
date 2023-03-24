import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-image-thumbnail-column',
  templateUrl: './image-thumbnail-column.component.html',
  styleUrls: ['./image-thumbnail-column.component.scss']
})
export class ImageThumbnailColumnComponent implements OnInit {
  @Input() value: string;
  @Input() rowData: any;
  imagePath: any;
  isPhotoIdAvailable: boolean = false;
  constructor(private _sanitizer: DomSanitizer) { }
  
  ngOnInit(): void {
    if(this.value){
      this.isPhotoIdAvailable= true
    }
    // this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
    //              + this.value);
}
addImage(){
  
}

}

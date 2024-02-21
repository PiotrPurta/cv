import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImagePreviewModalComponent } from '../image-preview-modal/image-preview-modal.component';

@Component({
  selector: 'app-certificate-entry',
  templateUrl: './certificate-entry.component.html',
  styleUrl: './certificate-entry.component.scss'
})
export class CertificateEntryComponent {

  constructor(private dialog: MatDialog) { }
  @Input()
  name: string = '';

  @Input()
  url: string = '';

  showCertificate(){
    const dialogRef = this.dialog.open(ImagePreviewModalComponent, {maxHeight: "100%"});
    dialogRef.componentInstance.name = this.name;
    dialogRef.componentInstance.url = this.url;
  }
}

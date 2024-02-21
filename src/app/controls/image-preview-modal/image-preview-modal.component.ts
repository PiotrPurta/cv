import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-preview-modal',
  templateUrl: './image-preview-modal.component.html',
  styleUrl: './image-preview-modal.component.scss'
})
export class ImagePreviewModalComponent {
  @Input()
  url: string = "";

  @Input()
  name: string = "";
}

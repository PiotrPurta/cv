import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-additional-profile',
  templateUrl: './additional-profile.component.html',
  styleUrls: ['./additional-profile.component.scss']
})
export class AdditionalProfileComponent {
  @Input()
  name: string = "";

  @Input()
  url: string = "";
}

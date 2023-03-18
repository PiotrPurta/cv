import { Component, Input } from '@angular/core';
import { Profile } from '../model/profile';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {

  @Input()
  profile: Profile|any = null;
}

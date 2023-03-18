import { Component, Input } from '@angular/core';
import { WorkEntry } from 'src/app/model/workEntry';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent {
  @Input()
  entry: WorkEntry|any = null;
}

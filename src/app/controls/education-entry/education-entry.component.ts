import { Component, Input } from '@angular/core';
import { EducationEntry } from 'src/app/model/educationEntry';

@Component({
  selector: 'app-education-entry',
  templateUrl: './education-entry.component.html',
  styleUrls: ['./education-entry.component.scss']
})
export class EducationEntryComponent {
  @Input()
  entry: EducationEntry|any = null;
}

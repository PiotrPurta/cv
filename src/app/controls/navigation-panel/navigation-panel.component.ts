import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrl: './navigation-panel.component.scss'
})
export class NavigationPanelComponent {
  @Input()
  title: String = '';

  @Output()
  downloadResumeEvent = new EventEmitter<boolean>();
}

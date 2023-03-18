import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MaterialModule } from './material/material.module';
import { ProfileService } from './services/profileService';
import { AdditionalProfileComponent } from './controls/additional-profile/additional-profile.component';
import { LoadingModalComponent } from './controls/loading-modal/loading-modal.component';
import { EducationEntryComponent } from './controls/education-entry/education-entry.component';
import { WorkHistoryComponent } from './controls/work-history/work-history.component';

@NgModule({
  declarations: [
    MainComponent,
    PersonalDetailsComponent,
    AdditionalProfileComponent,
    LoadingModalComponent,
    EducationEntryComponent,
    WorkHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ProfileService],
  bootstrap: [MainComponent]
})
export class AppModule { }

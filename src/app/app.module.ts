import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './controls/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalDetailsComponent } from './controls/personal-details/personal-details.component';
import { MaterialModule } from './material.module';
import { ProfileService } from './services/profileService';
import { AdditionalProfileComponent } from './controls/additional-profile/additional-profile.component';
import { LoadingModalComponent } from './controls/loading-modal/loading-modal.component';
import { EducationEntryComponent } from './controls/education-entry/education-entry.component';
import { WorkHistoryComponent } from './controls/work-history/work-history.component';
import { NavigationPanelComponent } from './controls/navigation-panel/navigation-panel.component';
import { CertificateContainerComponent } from './controls/certificate-container/certificate-container.component';
import { CertificateEntryComponent } from './controls/certificate-entry/certificate-entry.component';
import { ImagePreviewModalComponent } from './controls/image-preview-modal/image-preview-modal.component';

@NgModule({
  declarations: [
    MainComponent,
    PersonalDetailsComponent,
    AdditionalProfileComponent,
    LoadingModalComponent,
    EducationEntryComponent,
    WorkHistoryComponent,
    NavigationPanelComponent,
    CertificateContainerComponent,
    CertificateEntryComponent,
    ImagePreviewModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [ProfileService],
  bootstrap: [MainComponent]
})
export class AppModule { }

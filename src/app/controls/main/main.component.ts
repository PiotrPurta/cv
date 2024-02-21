import { Component, OnInit } from '@angular/core';
import { Profile } from '../../model/profile';
import { ProfileService } from '../../services/profileService';
import { Environment } from 'src/environment';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  title = Environment.Title;

  profile?: Profile;

  public get isLoading(){
    return this.profile == null;
  }

  public get hasAdditionalProfiles(){
    return this.profile?.additionalProfiles != null
      && this.profile.additionalProfiles.length > 0;
  }

  public get hasCertificates(){
    return this.profile?.certificates != null
      && this.profile.certificates.length > 0;
  }

  constructor(private profileService: ProfileService){ }

  async ngOnInit(): Promise<void> {
    this.profile = await this.profileService.getProfileData();
  }

  downloadResume(isPolishVersionSelected: boolean){
    const resumeFileUrl = isPolishVersionSelected
      ? this.profile?.resumePolishVersionUrl
      : this.profile?.resumeEnglishVersionUrl;

      if (resumeFileUrl){
        window.location.href = resumeFileUrl;
      }
  }
}


import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { ProfileService } from '../services/profileService';

@Component({
  selector: 'app-root',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  title = 'Curriculum Vitae';

  profile: Profile|any = null;

  public get isLoading(){
    return this.profile == null;
  }

  public get hasAdditionalProfiles(){
    return this.profile?.additionalProfiles != null
      && this.profile.additionalProfiles.length > 0;
  }

  public get hasCertificates(){
    return false;
  }

  constructor(private profileService: ProfileService){ }

  async ngOnInit(): Promise<void> {
    this.profile = await this.profileService.getProfileData();
  }

  onFavouriteClicked() {
    console.log("Favourite Clicked");
  }

  onShareClicked(){
    console.log("Share clicked");
  }

  onDownloadClicked() {
    console.log("Download Clicked");
  }
}


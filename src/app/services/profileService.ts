import { Injectable } from "@angular/core";
import { Profile } from "../model/profile";

@Injectable({
    providedIn: 'root'
})

export class ProfileService{
    profile: Profile;

    sleep = (ms: number | undefined) => new Promise(r => setTimeout(r, ms));
    
    constructor(){
        this.profile = {...
        }
    }

    public async getProfileData(): Promise<Profile>{
        await this.sleep (1000);
        return this.profile
    }
}
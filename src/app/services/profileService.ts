import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Profile } from "../model/profile";
import { Environment } from "src/environment";

@Injectable({
    providedIn: 'root'
})

export class ProfileService{

    constructor(private http: HttpClient){ }

    public async getProfileData(): Promise<Profile>{
        const profile: Profile = await firstValueFrom(this.http.get<Profile>(Environment.DataUrl));
        return profile;
    }
}
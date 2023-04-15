import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Profile } from "../model/profile";

@Injectable({
    providedIn: 'root'
})

export class ProfileService{
   
    constructor(private http:HttpClient){ }

    public async getProfileData(): Promise<Profile>{
        const profile: Profile = await firstValueFrom(this.http.get<Profile>('https://ppp-az-today-quote.azurewebsites.net/api/getresumedata'));
        return profile;
    }
}
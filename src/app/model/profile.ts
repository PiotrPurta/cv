import { AdditionalProfile } from "./additionalProfile";
import { EducationEntry } from "./educationEntry";
import { WorkEntry } from "./workEntry";

export class Profile{
    public firstName: string = "";
    public lastName: string = "";
    public birthDate: string ="";
    public address: string ="";
    public email: string ="";
    public website: string ="";
    public githubUrl: string ="";
    public image: string ="";

    public additionalProfiles: AdditionalProfile[] = [];
    public educationHistory: EducationEntry[] = [];
    public workHistory: WorkEntry[] = [];
}
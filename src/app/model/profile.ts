import { AdditionalProfile } from "./additionalProfile";
import { Certificate } from "./certificate";
import { EducationEntry } from "./educationEntry";
import { WorkEntry } from "./workEntry";

export class Profile{
    public firstName: string = "";
    public lastName: string = "";
    public birthDate: string = "";
    public city: string = "";
    public email: string = "";
    public websiteUrl: string = "";
    public githubUrl: string = "";
    public image: string = "";

    public resumePolishVersionUrl = "";
    public resumeEnglishVersionUrl = "";

    public additionalProfiles: AdditionalProfile[] = [];
    public educationHistory: EducationEntry[] = [];
    public workHistory: WorkEntry[] = [];
    public certificates: Certificate[] = [];
}
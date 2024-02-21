import { Component, Input } from '@angular/core';
import { Certificate } from 'src/app/model/certificate';

@Component({
  selector: 'app-certificate-container',
  templateUrl: './certificate-container.component.html',
  styleUrl: './certificate-container.component.scss'
})
export class CertificateContainerComponent {
  @Input() 
  certificates?: Certificate[] = [];

  public certificateCategories: string[] = [];

  ngOnInit(){
    if (!this.certificates){
      return;
    }

    this.certificateCategories = this.getCertificateCategories();
  }

  private getCertificateCategories(): string[] {
    let listOfCategories: string[] = []
    this.certificates?.forEach(cert => {
        if (listOfCategories.indexOf(cert.category) === -1){
            listOfCategories.push(cert.category);
        }
    });

    return listOfCategories;
  }

  public getCertificatesByCategory(category: string): Certificate[] {
    if (!this.certificates){
      return [];
    }

    return this.certificates.filter(cert => cert.category === category);
  }
}

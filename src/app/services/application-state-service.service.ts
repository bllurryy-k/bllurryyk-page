import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateServiceService {

  private isMobileResolution: boolean;

  constructor() {
    if (window.innerWidth < 768){
      this.isMobileResolution = true;
    } else{
      this.isMobileResolution = false;
    }
   }

   public getIsmobileResolution(): boolean{
     return this.isMobileResolution;
   }
}

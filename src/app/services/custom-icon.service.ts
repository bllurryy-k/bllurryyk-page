import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable()
export class CustomIconService 
{
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() 
  {
    this.matIconRegistry.addSvgIcon(
      "candy",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/pictures/icons/retro-wave/candy.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "game_controller",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/pictures/icons/retro-wave/game_controller.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "joystick",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/pictures/icons/retro-wave/joystick.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "usa-flag",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/pictures/icons/flag/usa.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "br-flag",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/pictures/icons/flag/brazil.svg")
    );
  }
}

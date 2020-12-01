import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Páginas
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';

//Angular-Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar'

//Custom-icons
import { HttpClientModule } from '@angular/common/http';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { CustomIconService } from './services/custom-icon.service';
import { HomeRedcatComponent } from './pages/redcat/home-redcat/home-redcat.component';
import { GamesComponent } from './pages/redcat/games/games.component';
import { AboutComponent } from './pages/about/about.component';
import { SoonComponent } from './pages/soon/soon.component';
import { HomeEnglishComponent } from './pages/english-site/home-english/home-english.component';
import { ProjetosEnglishComponent } from './pages/english-site/projetos-english/projetos-english.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    ProjetosComponent,
    HomeRedcatComponent,
    GamesComponent,
    AboutComponent,
    SoonComponent,
    HomeEnglishComponent,
    ProjetosEnglishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressBarModule
  ],
  providers: [
    CustomIconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

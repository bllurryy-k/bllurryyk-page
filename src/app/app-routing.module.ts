import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { ProjetosComponent } from './pages/projetos/projetos.component';
import { AboutComponent } from './pages/about/about.component';
import {SoonComponent } from './pages/soon/soon.component';

//red-cat-games
import { HomeRedcatComponent } from './pages/redcat/home-redcat/home-redcat.component';
import { GamesComponent } from './pages/redcat/games/games.component';

//english-version
import { HomeEnglishComponent } from './pages/english-site/home-english/home-english.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projetos', component: ProjetosComponent },
  { path: 'home-redcat', component: HomeRedcatComponent },
  { path: 'games', component: GamesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'soon', component: SoonComponent },
  { path: 'home-english', component: HomeEnglishComponent },
  { path: '', component:  HomeComponent},
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

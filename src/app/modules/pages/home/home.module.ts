import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { HomeProjectsComponent } from './components/home-projects/home-projects.component';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { HomeTeamComponent } from './components/home-team/home-team.component';
import { HomeReviewsComponent } from './components/home-reviews/home-reviews.component';
import { SliderItemDirective } from './components/home-reviews/slider-item.directive';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeAboutComponent,
    HomeProjectsComponent,
    HomeNewsComponent,
    HomeTeamComponent,
    HomeReviewsComponent,
    SliderItemDirective
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

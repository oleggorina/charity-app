import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonAccentComponent } from './button-accent/button-accent.component';
import { ButtonPrimaryComponent } from './button-primary/button-primary.component';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { BurgerComponent } from './navbar/components/burger/burger.component';
import { CardComponent } from './card/card.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { SocialSimpleComponent } from './social-simple/social-simple.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { TitleComponent } from './title/title.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { ReviewSliderComponent } from './review-slider/review-slider.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonAccentComponent,
    ButtonPrimaryComponent,
    SocialIconComponent,
    BurgerComponent,
    CardComponent,
    StatisticComponent,
    TeamCardComponent,
    SocialSimpleComponent,
    FooterComponent,
    TitleComponent,
    ReviewCardComponent,
    ReviewSliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ButtonAccentComponent,
    ButtonPrimaryComponent,
    SocialIconComponent,
    CardComponent,
    StatisticComponent,
    SocialSimpleComponent,
    TeamCardComponent,
    FooterComponent,
    TitleComponent,
    ReviewCardComponent,
    ReviewSliderComponent
  ]
})
export class ComponentsModule { }

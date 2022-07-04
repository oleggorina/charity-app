import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './modules/pages/about-us/about-us.component';
import { ContactsComponent } from './modules/pages/contacts/contacts.component';
import { DonateComponent } from './modules/pages/donate/donate.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { NewsComponent } from './modules/pages/news/news.component';
import { ProjectsComponent } from './modules/pages/projects/projects.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'donate', component: DonateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

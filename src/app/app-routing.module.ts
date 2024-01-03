import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutComponent } from './shared/about/about.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { CopysheetCustomComponent } from './shared/copysheet-custom/copysheet-custom.component';
import { CopysheetComponent } from './shared/copysheet/copysheet.component';
import { HomeComponent } from './shared/home/home.component';
import { PdfViewerComponent } from './shared/pdf-viewer/pdf-viewer.component';



const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'copysheet', component: CopysheetComponent},
    {path: 'copysheetCustom', component: CopysheetCustomComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactsComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

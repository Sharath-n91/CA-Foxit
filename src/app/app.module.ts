import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { PdfViewerComponent } from '../app/shared/pdf-viewer/pdf-viewer.component';
import { HomeComponent } from './shared/home/home.component';
import { CopysheetComponent } from './shared/copysheet/copysheet.component';
import { ContactsComponent } from './shared/contacts/contacts.component';
import { AboutComponent } from './shared/about/about.component';
import { SimpleDialogComponent } from './shared/simple-dialog/simple-dialog.component';
import { CustomModuleDialogComponent } from './shared/custom-module-dialog/custom-module-dialog.component';
import { CopysheetCustomComponent } from './shared/copysheet-custom/copysheet-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfViewerComponent,
    HomeComponent,
    CopysheetComponent,
    ContactsComponent,
    AboutComponent,
    SimpleDialogComponent,
    CustomModuleDialogComponent,
    CopysheetCustomComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents:[PdfViewerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

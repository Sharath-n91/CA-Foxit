import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomModuleDialogComponent } from './shared/custom-module-dialog/custom-module-dialog.component';
import { PdfViewerComponent } from './shared/pdf-viewer/pdf-viewer.component';
import { SimpleDialogComponent } from './shared/simple-dialog/simple-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
  private matDialog: MatDialog,
  ){}

  openFoxitDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.panelClass = 'confirmaton-dialog-foxit';
    dialogConfig.autoFocus = true;
    let dialogInstance: any;

    dialogInstance = this.matDialog.open(PdfViewerComponent, dialogConfig);
  }
  openFoxitDialogCustom(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let dialogInstance: any;

    dialogInstance = this.matDialog.open(CustomModuleDialogComponent, dialogConfig);
  }
  openSimpleDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let dialogInstance: any;

    dialogInstance = this.matDialog.open(SimpleDialogComponent, dialogConfig);
  }
}

import { Component, ElementRef, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import license from '../pdf-viewer/license-key';
import * as UIExtension from '../../../foxit-lib/UIExtension.full.js';
// import * as Addons from '../../../merged-foxit-addons.js';

@Component({
  selector: 'app-custom-module-dialog',
  templateUrl: './custom-module-dialog.component.html',
  styleUrls: ['./custom-module-dialog.component.scss']
})
export class CustomModuleDialogComponent implements OnInit {
  pdfui: any;
  dialogInstance: any;
  newDialogInstance: any;
  constructor( 
    private element: ElementRef,
    public dialogRef: MatDialogRef<CustomModuleDialogComponent>
    ) { }

  ngOnInit(): void {
    console.log(this.dialogRef);
    this.foxit(this.dialogRef, this.dialogInstance);
  }

  foxit(dialogRef, dialogInstance) {

      var CustomAppearance = UIExtension.appearances.RibbonAppearance.extend({
        getLayoutTemplate: function () {
          return [
            '<webpdf>',
            '<div class="tab-bodies" style="display:flex;flex-direction:row;flex-wrap:wrap">',
            '<hand-button></hand-button>',
            '<xbutton @controller="custom:SaveAndCloseController" icon-class="fv__icon-toolbar-add-stamp" text="Apply"></xbutton>',
            '<xbutton @controller="custom:SaveAndCloseController" icon-class="fv__icon-toolbar-download" text="Save & Close"></xbutton>',
            '<xbutton @controller="custom:CancelController" icon-class="fv__icon-toolbar-close" text="Cancel"></xbutton>',
            '</div>',
            '<div class="fv__ui-body">',
            '<sidebar>',
            '<thumbnail-sidebar-panel  fv__ui-hideclass="fv__cursor-loupe"style="touch-action: none;" ></thumbnail-sidebar-panel>',
            '<commentlist-sidebar-panel></commentlist-sidebar-panel>',
            '<search-sidebar-panel></search-sidebar-panel>',
            '</sidebar>',
            '<viewer></viewer>',
            '</div>',
            '</webpdf>'
          ].join('');
        },
      })

      this.pdfui = new UIExtension.PDFUI({
        viewerOptions: {
          libPath: '/foxit-lib',
          jr: {
            ...license,
            fontPath: location.origin + '/foxit-lib/assets/external/brotli/'
          }
        },
        renderTo: this.element.nativeElement,
        addons: [
          '../../../foxit-lib/uix-addons/edit-graphics',
          '../../../foxit-lib/uix-addons/export-form',
          '../../../foxit-lib/uix-addons/file-property',
          '../../../foxit-lib/uix-addons/form-designer',
          '../../../foxit-lib/uix-addons/form-to-sheet',
          '../../../foxit-lib/uix-addons/full-screen',
          '../../../foxit-lib/uix-addons/h-continuous',
          '../../../foxit-lib/uix-addons/h-facing',
          '../../../foxit-lib/uix-addons/h-single',
          '../../../foxit-lib/uix-addons/import-form',
          '../../../foxit-lib/uix-addons/multi-media',
          '../../../foxit-lib/uix-addons/page-template',
          '../../../foxit-lib/uix-addons/password-protect',
          '../../../foxit-lib/uix-addons/path-objects',
          '../../../foxit-lib/uix-addons/print',
          '../../../foxit-lib/uix-addons/read-aloud',
          '../../../foxit-lib/uix-addons/recognition-form',
          '../../../foxit-lib/uix-addons/redaction',
          '../../../foxit-lib/uix-addons/text-object',
          '../../../foxit-lib/uix-addons/thumbnail',
          '../../../foxit-lib/uix-addons/undo-redo',
          '../../../foxit-lib/uix-addons/xfa-form'
        ],
        appearance: CustomAppearance
      });
      this.pdfui.openPDFByHttpRangeRequest({
        range: {
          url: '../../../assets/Test_pdf.pdf',
        }
      })

    let customModule = UIExtension.PDFUI.module('custom', []);
    customModule.controller('SaveAndCloseController', {
      handle: function () {
        dialogRef.close(true);
      }
    });
    customModule.controller('CancelController', {
      handle: () => {
        dialogRef.close(false);
      }
    });
    }

}


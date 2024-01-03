import { Component, ElementRef, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import license from '../pdf-viewer/license-key';
import * as UIExtension from '../../../foxit-lib/UIExtension.full.js';
// import * as Addons from '../../../merged-foxit-addons.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-copysheet',
  templateUrl: './copysheet.component.html',
  styleUrls: ['./copysheet.component.scss']
})
export class CopysheetComponent implements OnInit {
  pdfui: any;

  constructor( 
    private element: ElementRef,
		private router: Router,
    ) { }

  ngOnInit(): void {
    this.foxit(this.router);
  }

  foxit(router) {

      var CustomAppearance = UIExtension.appearances.RibbonAppearance.extend({
        getDefaultFragments: function () {
          return [{
                 // Add a component
              action: UIExtension.UIConsts.FRAGMENT_ACTION.APPEND,
              // Specify the name of the target component that the new components defined in the above template will be appended to. All the target names of fragments are defined in the layout template. 
              target: 'home-tab-group-hand',
              // Define the properties of the added component, such as icon, text, and css style. 
              template: [
                '<dropdown icon-class="fv__icon-toolbar-download">',
                ' <dropdown-button name="show-download-button" icon-class="fv__icon-toolbar-apply-redaction">Save to Mongo</dropdown-button>',
                // ' <dropdown-button name="select-pdf-file-button" accept=".pdf" file-selector icon-class="fv__icon-toolbar-open">open</dropdown-button>', 
                '</dropdown>'].join(''),
              // Define the interaction logic of the added component. 
              config: []

            }]
         }
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
    }

}


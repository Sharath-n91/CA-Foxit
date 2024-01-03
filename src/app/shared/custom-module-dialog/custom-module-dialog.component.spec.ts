import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomModuleDialogComponent } from './custom-module-dialog.component';

describe('CustomModuleDialogComponent', () => {
  let component: CustomModuleDialogComponent;
  let fixture: ComponentFixture<CustomModuleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomModuleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomModuleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

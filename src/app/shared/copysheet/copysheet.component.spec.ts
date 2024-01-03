import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopysheetComponent } from './copysheet.component';

describe('CopysheetComponent', () => {
  let component: CopysheetComponent;
  let fixture: ComponentFixture<CopysheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopysheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopysheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

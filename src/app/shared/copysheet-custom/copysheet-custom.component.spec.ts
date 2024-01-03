import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopysheetCustomComponent } from './copysheet-custom.component';

describe('CopysheetCustomComponent', () => {
  let component: CopysheetCustomComponent;
  let fixture: ComponentFixture<CopysheetCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopysheetCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopysheetCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

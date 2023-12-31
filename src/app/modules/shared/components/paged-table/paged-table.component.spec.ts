/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PagedTableComponent } from './paged-table.component';

describe('PagedTableComponent', () => {
  let component: PagedTableComponent;
  let fixture: ComponentFixture<PagedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

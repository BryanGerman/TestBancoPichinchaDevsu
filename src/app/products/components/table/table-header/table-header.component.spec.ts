import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeaderComponent } from './table-header.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('TableHeaderComponent', () => {
  let component: TableHeaderComponent;
  let fixture: ComponentFixture<TableHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableHeaderComponent],
      providers:[
        {
          provide: Router, useValue: {
            "navigate": of(true)
          }
        }
      ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onInputChange', () => {
    component.onInputChange("x")
    expect(component).toBeTruthy();
  });


});

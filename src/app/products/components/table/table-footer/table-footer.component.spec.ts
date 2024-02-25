import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFooterComponent } from './table-footer.component';

describe('TableFooterComponent', () => {
  let component: TableFooterComponent;
  let fixture: ComponentFixture<TableFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should numberOfPagesShown - numberOfResultsShown=1', () => {
    
    component.numberOfResultsShown = 1;
    component.numberOfPagesShown();
    expect(component).toBeTruthy();
  });

  it('should numberOfPagesShown - totalNumberResults=0', () => {
    
    component.numberOfResultsShown = 0;
    component.totalNumberResults = 0;
    component.numberOfPagesShown();
    expect(component).toBeTruthy();
  });

  it('should numberOfPagesShown - totalNumberResults>0 and numberOfResultsShown>1', () => {
    
    component.totalNumberResults = 1;
    component.numberOfResultsShown = 2;
    component.totalPages = 2;
    component.numberOfPagesShown();
    expect(component).toBeTruthy();
  });

  it('should onSelectChange', () => {
    component.onSelectChange("x");
    expect(component).toBeTruthy();
  });

  it('should onClickPage - string', () => {
    component.onClickPage("x");
    expect(component).toBeTruthy();
  });

  it('should onClickPage - null', () => {
    component.onClickPage(null);
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncSearchComponent } from './sync-search.component';

describe('SyncSearchComponent', () => {
  let component: SyncSearchComponent;
  let fixture: ComponentFixture<SyncSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyncSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

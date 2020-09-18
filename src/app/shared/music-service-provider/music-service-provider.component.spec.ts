import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicServiceProviderComponent } from './music-service-provider.component';

describe('MusicServiceProviderComponent', () => {
  let component: MusicServiceProviderComponent;
  let fixture: ComponentFixture<MusicServiceProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicServiceProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicServiceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

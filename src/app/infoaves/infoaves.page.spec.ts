import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoavesPage } from './infoaves.page';

describe('InfoavesPage', () => {
  let component: InfoavesPage;
  let fixture: ComponentFixture<InfoavesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoavesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateBicyclePage } from './update-bicycle.page';

describe('UpdateBicyclePage', () => {
  let component: UpdateBicyclePage;
  let fixture: ComponentFixture<UpdateBicyclePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateBicyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

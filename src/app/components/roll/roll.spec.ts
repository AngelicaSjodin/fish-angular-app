import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Roll } from './roll';
import { Cards } from '../cards/cards';

describe('Roll', () => {
  let component: Roll;
  let fixture: ComponentFixture<Roll>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Roll, Cards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Roll);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

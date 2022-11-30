import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegProductComponent } from './reg-product.component';

describe('RegProductComponent', () => {
  let component: RegProductComponent;
  let fixture: ComponentFixture<RegProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

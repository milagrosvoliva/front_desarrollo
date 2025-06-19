import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerRestaurante } from './ver-restaurante';

describe('VerRestaurante', () => {
  let component: VerRestaurante;
  let fixture: ComponentFixture<VerRestaurante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerRestaurante]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerRestaurante);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

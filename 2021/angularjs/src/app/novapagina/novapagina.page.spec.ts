import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovapaginaPage } from './novapagina.page';

describe('NovapaginaPage', () => {
  let component: NovapaginaPage;
  let fixture: ComponentFixture<NovapaginaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovapaginaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovapaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, TestBed, ComponentFixture, getTestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HttpModule } from '@angular/http';

import { ProgressbarComponent } from './progressbar.component';
import { ApiService } from 'app/_service/api.service';

describe('Component: Progressbar', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ApiService],
      declarations: [ ProgressbarComponent ]
    }).compileComponents().then( () => {
      fixture= TestBed.createComponent(ProgressbarComponent);
      component= fixture.componentInsance;
      fixture.detectChanges();
    });
  });
  

  it('should be created', () => {
    let fixture = TestBed.createComponent(ProgressbarComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should click on select dropdown change', async(() => {
    
    jasmine.createSpy('resetCurrentPercent').and.callThrough();
    const compiled = fixture.debugElement.nativeElement;
      
    let element = fixture.debugElement.query(By.css('select'));
    element.triggerEventHandler('change', null);
    
    fixture.whenStable().then(() => {
      expect(component.resetCurrentPercent).toHaveBeenCalled();
    })
  }));

  // it('should change the progress bar', async(() => {
  //   // fixture.detectChanges();
  //   jasmine.createSpy('changeProgress').and.callThrough();
  //   const compiled = fixture.debugElement.nativeElement;

  //   const element = compiled.querySelector('button');
  //   element.click();
  //   fixture.whenStable().then(() => {
  //     // fixture.detectChanges();
  //     expect(compiled.changeProgress).toHaveBeenCalled();
  //   });
  // }));

});

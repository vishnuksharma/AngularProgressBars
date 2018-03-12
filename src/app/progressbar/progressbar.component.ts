import { Component, OnInit, ElementRef, ViewChild, ViewChildren, OnDestroy } from '@angular/core';
import { ApiService } from '../_service/api.service';
import { BarsModel } from 'app/_models/bars.model';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit, OnDestroy {
  @ViewChild('dropdownval') progressVal: ElementRef;
  @ViewChildren('progressBar') progressBars: any;
  
  // apiResponse = {
  //   buttons: [22,24,-43,-22],
  //   bars: [17,80,68,44],
  //   limit: 230
  //   };
  isApiError = false;
  apiRespButton: number[]
  apiRespBars: number[]
  progressBarWidth = 270;
  progressBarLimit : number;
  currentPercent: number = 0;


  constructor(private apiService:ApiService) { }
   ngOnInit() {
     try {
      this.apiService.getBars()
      .subscribe( response => {
        console.log(response);
        if (response != 'E') {
          let barsRes = new BarsModel(response);
 
          this.progressBarLimit = barsRes.getLimit();
          this.apiRespButton = barsRes.getButtons();
          this.apiRespBars = barsRes.getBars();
        } else {
          console.log(response);
          this.isApiError=true;
        }
        
      });
     } catch (error) {
      this.isApiError=true;
      console.log("api error", error);
     }
     
   }
   
  changeProgress(btnData: any){
    // console.log(btnData)
    this.progressBars.toArray()
      .map(eachBar => {

        if(eachBar.nativeElement.getAttribute('data-index') == this.progressVal.nativeElement.value){
          
          this.currentPercent = eachBar.nativeElement.querySelector('.sr-only').getAttribute('data-percent');
          
          this.currentPercent = Number(this.currentPercent) + Number(btnData.target.value);
          if (this.currentPercent > 0){
            eachBar.nativeElement.querySelector('.sr-only').setAttribute('data-percent', this.currentPercent);
          } else {
            eachBar.nativeElement.querySelector('.sr-only').setAttribute('data-percent', 0);
          }
          
          
          if (this.currentPercent > 0){
            eachBar.nativeElement.querySelector('.sr-only').innerHTML = this.currentPercent+'%';
            if (this.currentPercent > this.progressBarLimit){
              eachBar.nativeElement.querySelector('.progress-bar').style.backgroundColor = '#F82400';
            } else {
              eachBar.nativeElement.querySelector('.progress-bar').style.backgroundColor = '#B2D7E6';
            }
            // console.log(this.currentPercent)
            eachBar.nativeElement.querySelector('.progress-bar').style.width = (this.progressBarWidth / this.progressBarLimit)* this.currentPercent+'px';
          } else {
            eachBar.nativeElement.querySelector('.sr-only').innerHTML = '0%';
            eachBar.nativeElement.querySelector('.progress-bar').style.width = '0px';
          }
          
        }
      })

  }

  resetCurrentPercent(){
    this.currentPercent = 0;
  }

ngOnDestroy() {
  
  }
}

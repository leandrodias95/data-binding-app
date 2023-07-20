import { Component } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
[x: string]: any;

buttonName="My button";
i=0;


  constructor(){}
  btnEnable= false;
  mode: ProgressSpinnerMode = 'determinate';
  plusvalue=50;
  selectDisabled= false;
  selectedOption = 1;
  ngOnInit(){

  }

  save(){
    console.log("clique");
  }
disable(){
this.btnEnable=true;
this.mode="indeterminate"
setTimeout(()=>{
this.btnEnable=false;
this.mode="determinate"
},3000)
}
inc(){
  this.i++;
  this.buttonName="It was clicked "+this.i+" vezes";
  this.mode="determinate";
  this.plusvalue++;
  }
cbChange(event: any){ //passando o meu parametro e recebendo qualquer valor(genérico)
console.log(event.checked);
this.selectDisabled=event.checked;
}
selectionChange(event:any){
  console.log(event);
  this.selectedOption = event.value;
  }
}

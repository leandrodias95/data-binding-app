import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {

  color: string ="accent";
  btnDisabled=true;
  colors= ['primary','accent','warn','']
  idx=0;

constructor(){}

ngOnInit(){
  setInterval(()=>{
this.idx =(this.idx+1)%this.colors.length;
  },1000);
}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {

  firstname= "Jhon";

  person = {
    firstname: "Jhon",
    lastname:"bro",
    age: 50,
    adress:"Route 100"

  }

constructor(){}
ngOnInit(){

  }
}

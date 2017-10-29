import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectComponent } from '../../../node_modules/ng2-select/ng2-select';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  inputdata: any;
  newdata: boolean;
  @ViewChild('SelectId') public select: SelectComponent;
  constructor() { }
   items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
  'Essen', 'Frankfurt', 'Genoa',];

value:any = ['Athens'];
private _disabledV:string = '0';
private disabled:boolean = false;

public checkdata(event){
  this.inputdata =event;
let result = this.items.filter((item)=>{
  return item.toLowerCase().indexOf(event.toLowerCase()) > -1;
})
if(!result.length){
  this.newdata= true;
}
else {
  this.newdata= false;
}
console.log(result);
}
private get disabledV():string {
  return this._disabledV;
}

private set disabledV(value:string) {
  this._disabledV = value;
  this.disabled = this._disabledV === '1';
}

public selected(value:any):void {
  console.log('Selected value is: ', value);
}

public addnew(){
  console.log(this.items, "before")
  this.items.push(this.inputdata);
  console.log(this.items, "After");
  this.select.items= this.items;
  console.log(this.items);
  this.value.push(this.inputdata);
  console.log(this.value,"value")
  console.log(this.inputdata);
}

public removed(value:any):void {
  console.log('Removed value is: ', value);
}

public refreshValue(value:any):void {
  this.value = value;
}

public itemsToString(value:Array<any> = []):string {
  console.log(value);
  return value
    .map((item:any) => {
      console.log(item);
      return item.text;
    }).join(',');
}
  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild,ViewChildren, Input, Output, EventEmitter } from '@angular/core';
import { SelectComponent } from '../../../node_modules/ng2-select/ng2-select';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  temp: any;
  inputdata: any;
  newdata: boolean;
  @Input() lengthlimit:number;
  @Input() items:Array<string>;
  @Input() addFresh: boolean;
  @Input() title: string;
  @Output() private onAdd = new EventEmitter<any>();  
  @ViewChild('SelectId') public select: SelectComponent;
  @ViewChildren('SelectId') selectchildren;
  constructor() {} 

value:any;
private _disabledV:string = '0';
private disabled:boolean = false;


setmore(){
  // console.log(this.select)
  if(!this.select.opened.closed){
  // console.log(this.selectchildren._results["0"].element.nativeElement.children["0"])

      if(this.selectchildren._results["0"].element.nativeElement.children["0"].children[2]){
        // console.log(this.selectchildren._results["0"].element.nativeElement.children["0"].children[2]);
        this.selectchildren._results["0"].element.nativeElement.children["0"].children[2].children[5].style["pointer-events"] = "none"; 
      
  } 
} 
  
}
public checkdata(event){
  this.inputdata =event;
  // console.log(event)
  this.items = this.temp;
let result = this.temp.filter((item)=>{
  return item.toLowerCase().indexOf(event.toLowerCase()) > -1;
})
if(!this.select.options.length){
  this.newdata= true;
}
else {
  this.select.items = this.items;
  this.newdata= false;
}
// console.log(event)
if(event.length==1){
  this.items = this.items.slice(0,this.lengthlimit);
  this.items.push(this.temp.length-this.lengthlimit+" more");
}
// console.log(result);
}
private get disabledV():string {
  return this._disabledV;
}

private set disabledV(value:string) {
  this._disabledV = value;
  this.disabled = this._disabledV === '1';
}

public selected(value:any):void {
  // console.log('Selected value is: ', value);
}

public addnew(){
  // console.log(this.items, "before")
  // this.items.push(this.inputdata);
  if(this.temp.indexOf(this.inputdata)==-1){
  this.temp.push(this.inputdata);
  this.newdata = false;
  }
  this.select.items= this.items;
  // console.log(this.items);
  let payload = {
        id: this.inputdata,
        text: this.inputdata
      }
      this.select.active=[];
  this.select.active.push(payload);
  this.value = payload;
  this.items = this.items.slice(0,this.lengthlimit);
  this.items.push(this.temp.length-this.lengthlimit+" more");
  // console.log(JSON.stringify(this.select.active), "After");
  this.onAdd.emit(this.temp);
  // this.value.push(this.inputdata);
  // console.log(this.value,"value")
  // console.log(this.inputdata);
}

public refreshValue(value:any):void {
  this.value = value;
}

public itemsToString(value):string {
  return value.text;
}

  ngOnInit() {
    this.temp = this.items;
    this.items = this.items.slice(0,this.lengthlimit);
    this.items.push(this.temp.length-this.lengthlimit+" more");   
  }

}

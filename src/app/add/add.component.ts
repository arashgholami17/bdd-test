import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {
  disBut=true
  // public firstName=''
  // public lastName=''
  // public email=''
  // public number=''
  @Output() sendData= new EventEmitter()


  constructor() { }

  ngOnInit(): void {
    console.log('disBut',this.disBut)
  }


  onSave(fn:any,ln:any,em:any,num:any){
    this.sendData.emit(fn.value+'#'+ln.value+'#'+em.value+'#'+num.value)
  }
}

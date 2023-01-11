import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {

  tableRows=['firstName#lastName#email#phone#Action','Arash#Gholami#gholami.arash@sahand.co#09124978843','Ali1#Taghi#alli.taghi@sahand.co#091111111111','Ali2#Taghi#alli.taghi@sahand.co#09222222222222222222','Ali3#Taghi#alli.taghi@sahand.co#093333333333333333']
  public tableHead=this.tableRows[0].split('#')
  private dataRec
  public dataRecA:string[]
  private rowNum

  constructor(private _router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.tableHead.pop()
    this.dataRec=this.route.snapshot.params
    this.rowNum=this.dataRec.RowNum
    this.dataRecA=[this.dataRec.fn,this.dataRec.ln,this.dataRec.em,this.dataRec.nu]
  }

  onSave(){
    const inputfn = document.getElementById('firstName') as HTMLInputElement ;
    const inputln = document.getElementById('lastName') as HTMLInputElement ;
    const inpute = document.getElementById('email') as HTMLInputElement ;
    const inputp = document.getElementById('phone') as HTMLInputElement ;
    console.log('xxx value fn, ln, em, ph: ',inputfn.value,inputln.value,inpute.value,inputp.value)
    let sendData={fn:inputfn.value,ln:inputln.value,em:inpute.value,ph:inputp.value,row:this.rowNum}
    let navigationExtras: NavigationExtras = {
      state:{ sendData }}
    this._router.navigate(['/'],navigationExtras);
  }

}

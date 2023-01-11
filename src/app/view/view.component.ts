import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  tableRows=['FirstName#LastName#Email#Phone#Action','Arash#Gholami#gholami.arash@sahand.co#09124978843','Ali1#Taghi#alli.taghi@sahand.co#091111111111','Ali2#Taghi#alli.taghi@sahand.co#09222222222222222222','Ali3#Taghi#alli.taghi@sahand.co#093333333333333333']
  public tableHead=this.tableRows[0].split('#')
  showPopUp: boolean=false
  private getEdited

  constructor(private _router: Router,
              private route:ActivatedRoute) {
                this.getEdited=this._router.getCurrentNavigation().extras.state
                
    // this.tableHead=this.tableRows[0].split('#')
   }

  ngOnInit(): void {
    if(this.getEdited!=undefined)
    {
      let rowNum=this.getEdited.sendData.row
      this.getEdited.sendData 
      let changeData=`${this.getEdited.sendData.fn}#${this.getEdited.sendData.ln}#${this.getEdited.sendData.em}#${this.getEdited.sendData.ph}`
      this.tableRows.splice(rowNum,1,changeData)
    }
  }

  closePopUp() {
    this.showPopUp=false
  }

  onshowPopUp() {
    this.showPopUp=true
  }

  tableData() {
    let dataRow=[]
    let data=this.tableRows.slice(1)
  for(let i=0;i<data.length;i++){
    dataRow[i]=data[i].split('#')
  }  
  return dataRow
  }

  onDelete(row:number){
    this.tableRows.splice(row+1,1)
  }
  
  onEdit(row:number){
    let editHead=this.tableHead
    editHead.pop()
    let editedRow=this.tableRows[row+1].split('#')
    console.log(this.tableRows[row+1],this.tableRows[row+1].split('#'))
    const fn=editHead[0]
    const ln=editHead[1]
    const em=editHead[2]
    const nu=editHead[3]
    let SendData={fn: editedRow[0],ln: editedRow[1],em: editedRow[2],nu: editedRow[3],RowNum:row+1}
    this._router.navigate(['edit', SendData]);
  }

  getData(event){
    this.tableRows.push(event)
    this.closePopUp()
  }

}

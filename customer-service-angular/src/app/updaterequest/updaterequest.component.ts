import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicerequest } from '../payload/servicerequest';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-updaterequest',
  templateUrl: './updaterequest.component.html',
  styleUrls: ['./updaterequest.component.scss']
})
export class UpdaterequestComponent implements OnInit {

  request:Servicerequest=new Servicerequest();
  customerId:number=0;
  reqId:number=0;
  constructor(private service:CustomerserviceService,public router:Router) { }

  ngOnInit(): void {
  }

  findrequest(){
    this.service.findrequest(this.reqId).subscribe((data : any) =>{
      this.request=data;
    })
  }
  findcustomer(){
    this.service.findcustomer(this.customerId).subscribe((data : any) =>{
      // this.users=data;
    })
  }

  update(){
    console.log("register started"+this.request);
    this.service.updaterequest(this.request,this.customerId,this.reqId).subscribe((data) => {
      console.log(data);
      alert("Update Success")
      this.router.navigateByUrl('home');
  }
    );
}

}

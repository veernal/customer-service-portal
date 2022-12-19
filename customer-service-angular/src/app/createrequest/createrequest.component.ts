import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicerequest } from '../payload/servicerequest';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-createrequest',
  templateUrl: './createrequest.component.html',
  styleUrls: ['./createrequest.component.scss']
})
export class CreaterequestComponent implements OnInit {

  request: Servicerequest=new Servicerequest();
  customerId:number=0;

  constructor(private service:CustomerserviceService,public router:Router) { }

  ngOnInit(): void {
  }

  createRequest(){
    console.log(this.request); 
   
   this.service.createrequest(this.request,this.customerId).subscribe({
    next: (res:any)=>{
      console.log("Request created successfully" ,res);
      alert("Request created successfully")
      this.router.navigateByUrl('home');
  },
  error: (err:any)=>{
    console.log(err);
   
}
  })
  
  }

}

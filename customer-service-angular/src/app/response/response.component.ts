import { Component, Input, OnInit } from '@angular/core';
import { Servicerequest } from '../payload/servicerequest';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {
  @Input() 
  requests:Servicerequest[]=[];
  constructor(private service:CustomerserviceService) { }

  ngOnInit(): void {
  }

  reopenButton(request: Servicerequest){
    if(request.reqStatus.toLowerCase() === 'open'){
      return true;
    }else{
      return false;
    }
  }

  reopen(request: Servicerequest){
    request.reqStatus = 'open'
    this.service.updaterequest(request,request.customerId,request.reqId).subscribe((data) => {
      console.log(data);
      alert("Reopened the service request")

  }
    );
}

delete(request: Servicerequest){
  this.service.deleterequest(request.customerId, request.reqId).subscribe((data)=>{
    console.log(data);
    alert(data);
  });
}



}

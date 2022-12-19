import { Component, OnInit } from '@angular/core';
import { Servicerequest } from '../payload/servicerequest';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.scss']
})
export class RequestlistComponent implements OnInit {

  requests:Servicerequest[]=[]
  constructor(private service:CustomerserviceService) { }

  ngOnInit(): void {
    this.service.getrequests().subscribe((data: Servicerequest[]) => {
      console.log(data);
      this.requests = data;
  });
  }

}

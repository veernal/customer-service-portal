import { Component, OnInit } from '@angular/core';
import { Customer } from '../payload/customer';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-listofcustomers',
  templateUrl: './listofcustomers.component.html',
  styleUrls: ['./listofcustomers.component.scss']
})
export class ListofcustomersComponent implements OnInit {

  customers: Customer[]=[]
  constructor(private service :CustomerserviceService) { }

  ngOnInit(): void {
    this.service.getCustomers().subscribe((data: Customer[]) => {
      console.log(data);
      this.customers = data;
  });
  }

  format(pan: String) {
    var first4 = pan.substring(0, 2);
    var last2 = pan.substring(pan.length - 3);
    const mask = pan.substring(0, pan.length-3).replace(/\d/g,"*");
    console.log(first4 + mask+ last2);
    const encrypt = first4 + mask+ last2;
    return encrypt;
}

}

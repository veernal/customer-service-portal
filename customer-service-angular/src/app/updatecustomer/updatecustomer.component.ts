import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../payload/customer';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.scss']
})
export class UpdatecustomerComponent implements OnInit {

  users: Customer=new Customer();
  customerId:number=0;
  constructor(private service :CustomerserviceService,public router:Router) { }

  ngOnInit(): void {
  }

  findcustomer(){
    this.service.findcustomer(this.customerId).subscribe((data : any) =>{
      this.users=data;
    })
  }

  update(){
    console.log("register started"+this.users);
    this.service.update(this.users,this.customerId).subscribe((data) => {
      console.log(data);
      alert("Update Success")
      this.router.navigateByUrl('home');
  }
    );
}
}

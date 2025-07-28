import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../payload/customer';
import { CustomerserviceService } from '../service/customerservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  users: Customer=new Customer();

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    // role: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  customerserviceService: any;


  constructor(private service :CustomerserviceService, public router:Router,private formBuilder:FormBuilder ) {

    this.form = this.formBuilder.group(
      {
        username: ['',
          [
            Validators.required,
            Validators.minLength(7),
            Validators.maxLength(20),
            // this.validateUsername.bind(this)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        // role:['',Validators.required]
      },
    );

  }


  ngOnInit(): void {
  }

  register(){
    console.log("register started"+this.users);
    // if(this.users.customername)
    this.service.register(this.users).subscribe((data) => {
      (console.log(data));
      alert(data);
      this.router.navigateByUrl('/');
  }
    );
}

}

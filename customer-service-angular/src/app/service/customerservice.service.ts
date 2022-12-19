import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../payload/customer';
import { Servicerequest } from '../payload/servicerequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const RegisterApi="http://localhost:9090/customer/register";
const Login="http://localhost:9090/customer/login";

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  constructor(private client:HttpClient) { }

  register(user :Customer) :Observable<any>{
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    console.log(user,JSON.stringify(user));
    return this.client.post(RegisterApi,user, {'headers': headers});
    
  }

  login(user:Customer) {
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
  return this.client.post(Login,user, {'headers': headers} );
  }

  createrequest( req: Servicerequest,customerId:number) : Observable<any>
  {
     
      return this.client.post("http://localhost:9090/serviceRequest/"+customerId+"/createRequest",req);
  }

  getCustomers(): Observable<Customer[]>{
    return this.client.get<Customer[]>("http://localhost:9090/customer/getCustomers");
  }

  getrequest(status:String,customerId:number): Observable<any>{
    return this.client.get("http://localhost:9090/serviceRequest/findReqbyStatus/"+customerId+"/"+status);
  }

  getrequests(): Observable<Servicerequest[]>{
    return this.client.get<Servicerequest[]>("http://localhost:9090/serviceRequest/getListOfRequests");
  }

  findcustomer(customerId:number){
    return this.client.get("http://localhost:9090/customer/getCustomerId/"+customerId)
  }
  update(user :Customer,customerId:number) :Observable<any>{
    console.log(user,JSON.stringify(user));
    return this.client.put("http://localhost:9090/customer/updateCustomerDetails/"+customerId,user);
    
  }

  updaterequest(request :Servicerequest,customerId:number,reqId:number) :Observable<any>{
    console.log(request,JSON.stringify(request));
    return this.client.put("http://localhost:9090/serviceRequest/"+customerId+"/updateRequest/"+reqId,request);
    
  }

  deleterequest(customerId:number, reqId: number){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
    return this.client.delete("http://localhost:9090/serviceRequest/deletereq/"+customerId+"/"+reqId, {'headers': headers})
  }

  findrequest(reqId:number){
    return this.client.get("http://localhost:9090/serviceRequest/findRequestByID/"+reqId)
  }
}
